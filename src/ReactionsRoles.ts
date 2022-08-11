import Enmap from "enmap";

import {
    Client,
    EmbedBuilder,
    EmbedData,
    Message,
    MessageReaction,
    Role,
    TextChannel,
    User
} from "discord.js";

import { Utils } from "./Utils";

import { Emitter } from "./Emitter";

import Options from "../types/Options";

import {
    CreateReactionsRolesData,
    EditReactionsRolesData,
    GuildReactionRole,
    GuildReactionsRoles,
    ReactionsRolesMessages
} from "../types/Data";

import {
    EditMode,
    Events
} from "./Enums";

/**
 * Class that controls Reaction Roles System
 * 
 * @class
 * @classdesc ReactionRoles Class
 * @extends {Emitter}
 */
export class ReactionsRoles extends Emitter {
    public client: Client;

    public author: string;
    public website: string;
    public version: string;

    public ready: boolean | null;
    public readyTimestamp: number | null;

    public options: Options | null;
    public database: Enmap<string, GuildReactionsRoles[]> | null;

    public utils: Utils;

    /**
     * @constructor
     * 
     * @param {Client} client Discord Client
     * @param {Options} [options] Module Options
     */
    constructor(client: Client, options?: Options) {
        super();

        /**
         * Discord Client
         * 
         * @type {Client}
         * @private
         */
        this.client = client;

        /**
         * Module Author
         * 
         * @type {string}
         */
        this.author = require('../package.json').author;

        /**
         * Module Website URL
         * 
         * @type {string}
         */
        this.website = require('../package.json').homepage;
 
        /**
         * Module Version
         * 
         * @type {string}
         */
        this.version = require('../package.json').version;
        
        /**
         * Module Ready Status
         * 
         * @type {boolean}
         */
        this.ready = null;
        
        /**
         * Module Ready Timestamp
         * 
         * @type {number}
         */
        this.readyTimestamp = null;

        /**
         * Module Options
         * 
         * @type {Options}
         */
        this.options = null;

        /**
         * Module Database
         * 
         * @type {Enmap<string, GuildReactionsRoles[]>}
         */
        this.database = null;

        /**
         * Module Utils
         * 
         * @type {Utils}
         */
        this.utils = new Utils(this);

        this.init(options);
    }

    /**
     * Method for creating new menus to distribute roles by reaction
     * 
     * @param {TextChannel} channel Discord Guild text Channel
     * @param {CreateReactionsRolesData} options Reactions Roles Options
     * 
     * @returns {Promise<GuildReactionsRoles>} Object with the data of the created menu
     */
    create(channel: TextChannel, options: CreateReactionsRolesData): Promise<GuildReactionsRoles> {
        return new Promise(async (res, rej) => {
            const parsedEmoji = this.utils.parseEmoji(channel.guild.id, options.emoji);
            if(!parsedEmoji.isValid) return rej(new Error(`Unknown emoji with content '${options.emoji}'!`));

            const defaultMessages: ReactionsRolesMessages = {
                started: "A new role giveaway for reactions has been launched!",
                ended: "This role menu has been removed and is no longer active!"
            }

            const embed = new EmbedBuilder()

            embed.setColor(options.embed?.color ?? "Random")
            embed.setAuthor(options.embed?.author ?? { name: channel.guild.name, iconURL: channel.guild.iconURL() })
            embed.setThumbnail(options.embed?.thumbnail?.url ?? channel.guild.iconURL())
            embed.setImage(options.embed?.image?.url)
            embed.setDescription(options.messages?.started ?? defaultMessages.started)
            embed.setFooter(options.embed?.footer ?? { text: channel.guild.name, iconURL: channel.guild.iconURL() })
            embed.setTimestamp();

            embed.data.description += `\n\n${parsedEmoji.raw} - ${options.role}`;

            const message = await channel.send({ embeds: [embed] });

            await message.react(parsedEmoji.raw);

            const newMenu: GuildReactionsRoles = {
                author: options?.author ?? this.client.user.id,
                created: Date.now(),
                updated: null,

                messages: {
                    started: options.messages?.started ?? defaultMessages.started,
                    ended: options.messages?.ended ?? defaultMessages.ended
                },

                channelID: channel.id,
                messageID: message.id,

                data: [
                    {
                        id: parsedEmoji.id,
                        name: parsedEmoji.name,
                        roleID: options.role.id,
                        raw: parsedEmoji.raw,

                        added: Date.now(),
                        animated: parsedEmoji.animated
                    }
                ]
            }
            
            const guildMenus = this.database.get(channel.guild.id);

            if(guildMenus?.length >= 1) {
                guildMenus.push(newMenu);

                this.database.set(channel.guild.id, guildMenus);
            }else this.database.set(channel.guild.id, [newMenu]);

            return res(newMenu);
        })
    }

    /**
     * Method for changing the menu of roles by reaction (adding/removing reactions)
     * 
     * @param {string} guildID Discord Guild ID
     * @param {string} messageID Discord Guild Message ID
     * @param {EditMode} mode Edit Mode
     * @param {EditReactionsRolesData} options Edit Options
     * 
     * @returns {Promise<GuildReactionsRoles>} Modified menu data object
     */
    public edit(guildID: string, messageID: string, mode: EditMode, options: EditReactionsRolesData): Promise<GuildReactionsRoles> {
        return new Promise(async (res, rej) => {
            const guild = this.client.guilds.cache.get(guildID);
            if(!guild) return rej(new Error(`Unknown guild with ID '${guildID}'!`));

            const guildMenus = this.database.get(guildID);
            if(guildMenus?.length <= 0) return rej(new Error(`Unknown menus with Guild ID '${guildID}'!`));

            const reactionRolesMenu = guildMenus.find(menu => menu.messageID === messageID);
            if(!reactionRolesMenu) return rej(new Error(`Unknown menu with message ID '${messageID}'!`));

            const parsedEmoji = this.utils.parseEmoji(guildID, options.emoji);
            if(!parsedEmoji.isValid) return rej(new Error(`Unknown emoji with content '${options.emoji}'!`));

            const reactionRoleData = reactionRolesMenu.data;
            const menuMessage = await this.utils.getMessage(guildID, reactionRolesMenu.channelID, messageID);

            switch(mode) {
                case EditMode.ADD: {
                    if(reactionRoleData.find(data => data.roleID === options.role.id || data.raw === parsedEmoji.raw)) return rej(`The reaction/role '${options.emoji}/${options.role}' is already in the menu with the message ID '${messageID}'!`);

                    const reactionRole: GuildReactionRole = {
                        id: parsedEmoji.id,
                        name: parsedEmoji.name,
                        roleID: options.role.id,
                        raw: parsedEmoji.raw,

                        added: Date.now(),
                        animated: parsedEmoji.animated
                    }

                    if(menuMessage) {
                        try {
                            const embed = EmbedBuilder.from(menuMessage.embeds[0]);

                            embed.data.description += `\n${parsedEmoji.raw} - ${options.role}`;

                            await menuMessage.react(parsedEmoji.raw);
                            await menuMessage.edit({ embeds: [embed] });
                        } catch(error) {
                            return res(null);
                        }

                        reactionRoleData.push(reactionRole);
                        reactionRolesMenu.updated = Date.now();

                        this.database.set(guildID, guildMenus);

                        return res(reactionRolesMenu);
                    }else return res(null);
                }

                case EditMode.REMOVE: {
                    if(!reactionRoleData.find(data => data.roleID === options.role.id && data.raw === parsedEmoji.raw)) return rej(`Reaction/role '${options.emoji}/${options.role}' not found in menu with message ID '${messageID}'!`);

                    const editedReactionRoleData = reactionRoleData.filter(data => data.raw != parsedEmoji.raw && data.roleID != options.role.id);
                    if(editedReactionRoleData.length <= 0) return this.remove(guildID, messageID);

                    reactionRolesMenu.data = editedReactionRoleData;

                    if(menuMessage) {
                        try {
                            let description: string = reactionRolesMenu.messages.started + "\n\n";

                            const embed = EmbedBuilder.from(menuMessage.embeds[0]);

                            await menuMessage.reactions.cache.get(parsedEmoji?.id ?? parsedEmoji.raw).remove();
                            
                            for(let i = 0; i < reactionRolesMenu.data.length; i++) {
                                const data = reactionRolesMenu.data[i];

                                await menuMessage.react(data.raw);

                                description += `${data.raw} - <@&${data.roleID}>\n`;
                            }
                            
                            embed.data.description = description;

                            this.database.set(guildID, guildMenus);

                            await menuMessage.edit({ embeds: [embed] });
                        } catch(error) {
                            return res(null);
                        }

                        return res(reactionRolesMenu);
                    }else return res(null);
                }
            }
        })
    }

    /**
     * Method for removing server menus of roles by reaction
     * 
     * @param {string} guildID Discord Guild ID
     * @param {string} messageID Discord Guild Message ID
     * 
     * @returns {Promise<boolean>} Deletion state
     */
    public remove(guildID: string, messageID: string): Promise<boolean> {
        return new Promise(async (res, rej) => {
            const guild = this.client.guilds.cache.get(guildID);
            if(!guild) return rej(new Error(`Unknown guild with ID '${guildID}'!`));

            const guildMenus = this.database.get(guildID);
            if(guildMenus?.length <= 0) return rej(new Error(`Unknown menus with Guild ID '${guildID}'!`));

            const reactionRolesMenu = guildMenus.find(menu => menu.messageID === messageID);
            if(!reactionRolesMenu) return rej(new Error(`Unknown menu with message ID '${messageID}'!`));

            const menuMessage = await this.utils.getMessage(guildID, reactionRolesMenu.channelID, reactionRolesMenu.messageID);

            if(menuMessage) {
                if(this.options.deleteOldMenus) {
                    try {
                        await menuMessage.delete();
                    } catch(error) {
                        return res(false);
                    }
                }else{
                    const embed = EmbedBuilder.from(menuMessage.embeds[0]);

                    if(this.options.deleteOldMenusReactions) {
                        try {
    
                            await menuMessage.reactions.removeAll();
                        } catch(error) {
                            return res(false);
                        }
                    }

                    try {
                        embed.data.description = reactionRolesMenu.messages.ended;

                        await menuMessage.edit({ embeds: [embed] });
                    } catch(error) {
                        return res(false);
                    }
                }

                this.database.set(guildID, guildMenus.filter(guildMenu => guildMenu.messageID != messageID));

                return res(true);
            }else return res(false);
        })
    }

    /**
     * Method for module initialization
     * 
     * @param {Options} [options] Module Options
     * 
     * @private
     */
    private init(options?: Options): void {
        const interval = setInterval(async () => {
            if(this.client.isReady()) {
                this.utils.fetchIntents();
                this.utils.fetchPartials();

                this.ready = true;
                this.readyTimestamp = Date.now();
                this.options = this.utils.fetchOptions(options ?? {});

                this.initDatabase();
                this.monitorEvents();

                this.emit(Events.READY, this);

                clearInterval(interval);
            }
        }, 100)
    }

    /**
	 * Method for module database initialization
     * 
     * @private
	 */
    private initDatabase(): void {
        this.database = new Enmap({
            name: this.options.database.name,
            dataDir: this.options.database.path,
            wal: false
        })
    }

    /**
     * Method for starting client event tracking
     * 
     * @private
     */
    private monitorEvents(): void {
        this.client.on("messageReactionAdd", async (reaction, user) => {
            if(!user.bot) {
                let message: Message;

                if(reaction.message.partial) message = await reaction.message.fetch();
                else message = reaction.message as Message;

                const guildMenus = this.database.get(message.guild.id);

                if(guildMenus?.length >= 1) {
                    const reactionsRoles = guildMenus.find(guildMenu => guildMenu.messageID === message.id);

                    if(reactionsRoles?.created) {
                        const react = reaction.emoji;
                        const reactionRolesData = reactionsRoles.data;
                        const reactRaw = react?.id ? `<${react?.animated ? "a" : ""}:${react.name}:${react.id}>` : react.name;

                        const reactionRole = reactionRolesData.find(data => data.raw === reactRaw);

                        if(reactionRole?.raw) {
                            try {
                                const guildMember = await this.utils.getMember(message.guild.id, user.id);

                                if(!guildMember?.roles?.cache?.has(reactionRole.roleID)) {
                                    await guildMember?.roles?.add(reactionRole.roleID);

                                    this.emit(Events.ROLE_ADDED, user, reactionRole);
                                }
                            } catch(error) {
                                return;
                            }
                        }
                    }
                }
            }
        })

        this.client.on("messageReactionRemove", async (reaction, user) => {
            if(!user.bot) {
                let message: Message;

                if(reaction.message.partial) message = await reaction.message.fetch();
                else message = reaction.message as Message;

                const guildMenus = this.database.get(message.guild.id);

                if(guildMenus?.length >= 1) {
                    const reactionsRoles = guildMenus.find(guildMenu => guildMenu.messageID === message.id);

                    if(reactionsRoles?.created) {
                        const react = reaction.emoji;
                        const reactionRolesData = reactionsRoles.data;
                        const reactRaw = react?.id ? `<${react?.animated ? "a" : ""}:${react.name}:${react.id}>` : react.name;

                        const reactionRole = reactionRolesData.find(data => data.raw === reactRaw);

                        if(reactionRole?.raw) {
                            try {
                                const guildMember = await this.utils.getMember(message.guild.id, user.id);

                                if(guildMember?.roles?.cache?.has(reactionRole.roleID)) {
                                    await guildMember?.roles?.remove(reactionRole.roleID);

                                    this.emit(Events.ROLE_REMOVED, user, reactionRole);
                                }
                            } catch(error) {
                                return;
                            }
                        }
                    }
                }
            }
        })
    }
}

/**
 * Emits when the module is ready
 * 
 * @event ReactionsRoles#ready
 * 
 * @param {ReactionsRoles} client Reactions Roles instance
 */

/**
 * Emitted when the user has received a role for clicking on a reaction
 * 
 * @event ReactionsRoles#roleAdded
 * 
 * @param {User} user Reaction User Data
 * @param {GuildReactionRole} data Reaction Role Data
 */

/**
 * Emitted when a user has lost a role for deleting a previously added reaction
 * 
 * @event ReactionsRoles#roleRemoved
 * 
 * @param {User} user Reaction User Data
 * @param {GuildReactionRole} data Reaction Role Data
 */

/**
 * Module Options
 * 
 * @typedef {object} Options
 * 
 * @prop {boolean} [deleteOldMenus=false] Delete inactive role menu messages by reaction?
 * @prop {boolean} [deleteOldMenusReactions=true] Remove reactions to inactive role menus by reaction?
 * @prop {object} [database] Module database configuration
 * @prop {string} [database.name=reactions_roles] Database name
 * @prop {string} [database.path=./] Database path
 */

/**
 * Guild Reactions Roles Data
 * 
 * @typedef {object} GuildReactionsRoles
 * 
 * @prop {string} author Menu author ID
 * @prop {number} created Create menu timestamp
 * @prop {number} updated Update menu timestamp
 * @prop {ReactionsRolesMessages} messages Menu Messages
 * @prop {string} channelID Menu channel ID
 * @prop {string} messageID Menu message ID
 * @prop {GuildReactionRole[]} data Menu reactions & roles data
 */

/**
 * Guild Reaction Role Data
 * 
 * @typedef {object} GuildReactionRole
 * 
 * @prop {string | null} id Reaction ID
 * @prop {string | null} name Reaction Name
 * @prop {string} raw Reaction Emoji Raw
 * @prop {string} roleID Reaction Role ID
 * @prop {number} added Reaction Role add timestamp
 * @prop {boolean} animated Reaction is animated?
 */

/**
 * Create Reaction Roles Menu Options
 * 
 * @typedef {object} CreateReactionsRolesData
 * 
 * @prop {Role} role Reactin Role Data
 * @prop {string} emoji Emoji Content
 * @prop {EmbedData} [embed] Discord Embed Options
 * @prop {string} [author] Reactions Roles Menu Author ID
 * @prop {ReactionsRolesMessages} [messages] Reaction Roles Menu Messages
 */

/**
 * Edit Reaction Roles Menu Options
 * 
 * @typedef {object} EditReactionsRolesData
 * 
 * @prop {Role} role Reaction Role Data
 * @prop {string} emoji Emoji Content
 */

/**
 * Reaction Roles Menu Messages
 * 
 * @typedef {object} ReactionsRolesMessages
 * 
 * @prop {string} started Reactions Roles Menu Start Message
 * @prop {string} ended Reactions Roles Menu End Message
 */

/**
 * Parsed Emoji Data
 * 
 * @typedef {object} ParsedEmoji
 * 
 * @prop {string} id Emoji ID
 * @prop {string} name Emoji Name
 * @prop {string} raw Emoji pointer as a string
 * @prop {boolean} isValid Is content emoji?
 * @prop {boolean} unicode Is emoji unicode?
 * @prop {boolean} animated Is the emoji animated?
 */