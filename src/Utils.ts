// Import requirements
import EmojiParser from "discord-emojis-parser";
import { EmojiParser as EmojisParser } from "discord-message-parser";
import { GatewayIntentBits, GuildMember, IntentsBitField, Message, Partials, TextChannel } from "discord.js";

// Import module main class
import { ReactionsRoles } from "./ReactionsRoles";

// Import options interface
import Options from "../types/Options";

// Import module interfaces
import { ParsedEmoji } from "../types/Data";

export class Utils {
    private reactionsRoles: ReactionsRoles;

    /**
     * @constructor
     * 
     * @param {ReactionsRoles} reactionsRoles Reaction Roles Class
     */
    constructor(reactionsRoles: ReactionsRoles) {
        /**
         * Reactions Roles Class
         * 
         * @type {ReactionsRoles}
         * @private
         */
        this.reactionsRoles = reactionsRoles;
    }

    /**
     * Method for checking module configuration
     * 
     * @param {Options} options Module options
     * 
     * @returns {Options} Valid module configuration
     */
    public fetchOptions(options?: Options): Options {
        if(!options) {
            options = {
                deleteOldMenus: false,
                deleteOldMenusReactions: true,

                database: {
                    name: "reactions_roles",
                    path: "./"
                }
            }
        }else{
            if(typeof options?.deleteOldMenus != "boolean") options.deleteOldMenus = false;
            if(typeof options?.deleteOldMenusReactions != "boolean") options.deleteOldMenusReactions = true;
            
            if(!options.database || typeof options.database != "object") {
                options.database = {
                    name: "reactions_roles",
                    path: "./"
                }
            }else{
                if(!options.database.name || typeof options.database.name != "string") options.database.name = "reactions_roles";
                if(!options.database.path || typeof options.database.path != "string") options.database.path = "./";
            }
        }

        return options;
    }

    /**
     * Method for checking client intents
     * 
     * @private
     */
    public fetchIntents(): void {
        const defaultIntents: GatewayIntentBits[] = [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions
        ]
        
        const clientIntents = new IntentsBitField(this.reactionsRoles.client.options.intents);

        for(const intent of defaultIntents) {
            if(!clientIntents.has(intent)) throw new Error(`Missing required client intent: '${GatewayIntentBits[intent]}'!`);
        }
    }

    /**
     * Method for checking client partials
     * 
     * @private
     */
    public fetchPartials(): void {
        const defaultPartials: Partials[] = [
            Partials.Message,
            Partials.Reaction,
            Partials.User
        ]

        const clientPartials = this.reactionsRoles.client.options.partials;

        for(const partial of defaultPartials) {
            if(!clientPartials.includes(partial)) throw new Error(`Missing required client partial: '${Partials[partial]}'!`);
        }
    }

    /**
     * Method for parsing emoji content
     * 
     * @param {string} guildID Discord Guild ID
     * @param {string} data Emoji content
     * 
     * @returns {ParsedEmoji} Content parsing data
     */
    public parseEmoji(guildID: string, data: string): ParsedEmoji {
        const guild = this.reactionsRoles.client.guilds.cache.get(guildID);
        if(!guild) throw new Error(`Unknown guild with id '${guildID}'!`);

        let parsed: ParsedEmoji;
        const guildEmoji = guild.emojis.cache.find(e => `<${e.animated ? "a" : ""}:${e.name}:${e.id}>` === data);

        if(data.startsWith("<") && data.endsWith(">")) {
            const parseData = EmojisParser.parseEmojis(data);

            parsed = {
                id: guildEmoji?.id ?? null,
                name: guildEmoji?.name ?? null,
                raw: parseData.allEmojis[0]?.raw ?? null,
                isValid: guildEmoji ? true : parseData.allEmojis[0]?.raw ? parseData.allEmojis[0].raw.includes("<") ? false : true : false,
                unicode: parseData.allEmojis[0]?.unicode ?? null,
                animated: parseData.allEmojis[0]?.animated ?? null
            }
        }else{
            const parseData = EmojiParser.parse(data);

            parsed = {
                id: guildEmoji?.id ?? null,
                name: guildEmoji?.name ?? null,
                raw: parseData[0]?.unicode ?? null,
                isValid: parseData.length ? true : false,
                unicode: parseData.length ? true : false,
                animated: false
            }
        }

        return parsed;
    }

    /**
     * A method for getting a text channel
     * 
     * @param {string} guildID Discord Guild ID
     * @param {string} channelID Discord Guild Channel ID
     * 
     * @returns {Promise<TextChannel>} Guild Text Channel
     */
    public getChannel(guildID: string, channelID: string): Promise<TextChannel> {
        return new Promise(async (res, rej) => {
            const guild = this.reactionsRoles.client.guilds.cache.get(guildID);
            if(!guild) return rej(new Error(`Unknown guild with ID '${guildID}'!`));

            let channel: TextChannel;
            
            try {
                channel = guild.channels.cache.get(channelID) as TextChannel;
                if(!channel) channel = (await guild.channels.fetch(channelID)) as TextChannel;
            } catch(error) {
                return res(null);
            }

            return res(channel);
        })
    }

    /**
     * Method for receiving a message on a specified channel
     * 
     * @param {string} guildID Discord Guild ID
     * @param {string} channelID Discord Guild Channel ID
     * @param {string} messageID Discord Guild Message ID
     * 
     * @returns {Promise<Message>} Discord Guild Message
     */
    public getMessage(guildID: string, channelID: string, messageID: string): Promise<Message> {
        return new Promise(async (res, rej) => {
            const guild = this.reactionsRoles.client.guilds.cache.get(guildID);
            if(!guild) return rej(new Error(`Unknown guild with ID '${guildID}'!`));

            let message: Message;

            try {
                const channel = await this.getChannel(guildID, channelID);

                message = channel.messages.cache.get(messageID);
                if(!message) message = (await channel.messages.fetch(messageID));
            } catch(error) {
                return res(null);
            }

            return res(message);
        })
    }

    /**
     * A method to get the server member
     * 
     * @param {string} guildID Discord Guild ID
     * @param {string} userID Discord User ID
     * 
     * @returns {Promise<GuildMember>} Guild Member Data
     */
    public getMember(guildID: string, userID: string): Promise<GuildMember> {
        return new Promise(async (res, rej) => {
            const guild = this.reactionsRoles.client.guilds.cache.get(guildID);
            if(!guild) return rej(new Error(`Unknown guild with ID '${guildID}'!`));

            let member: GuildMember;

            try {
                member = guild.members.cache.get(userID);
                if(!member) member = (await guild.members.fetch(userID));
            } catch(error) {
                return res(null);
            }

            return res(member);
        })
    }
}