import {
    GuildEmoji,
    GuildMember,
    Message,
    TextChannel
} from "discord.js";

import { ReactionsRoles } from "./ReactionsRoles";

import Options from "./Options";
import { ParsedEmoji } from "./Data";

export declare class Utils {
    constructor(reactionsRoles: ReactionsRoles);

    private reactionsRoles: ReactionsRoles;

    /**
     * Method for checking module configuration
     * 
     * @param options Module options
     * 
     * @returns Valid module configuration
     */
    public fetchOptions(options?: Options): Options;

    /**
     * Method for checking client intents
     */
    private fetchIntents(): void;

    /**
     * Method for checking client partials
     */
    private fetchPartials(): void;

    /**
     * Method for parsing emoji content
     * 
     * @param guildID Discord Guild ID
     * @param data Emoji content
     * 
     * @returns Content parsing data
     */
    public parseEmoji(guildID: string, data: string): ParsedEmoji;

    /**
     * A method for getting a text channel
     * 
     * @param guildID Discord Guild ID
     * @param channelID Discord Guild Channel ID
     * 
     * @returns Guild Text Channel
     */
    public getChannel(guildID: string, channelID: string): Promise<TextChannel>;

    /**
     * Method for receiving a message on a specified channel
     * 
     * @param guildID Discord Guild ID
     * @param channelID Discord Guild Channel ID
     * @param messageID Discord Guild Message ID
     * 
     * @returns Discord Guild Message
     */
    public getMessage(guildID: string, channelID: string, messageID: string): Promise<Message>;

    /**
     * A method to get the server member
     * 
     * @param guildID Discord Guild ID
     * @param userID Discord User ID
     * 
     * @returns Guild Member Data
     */
    public getMember(guildID: string, userID: string): Promise<GuildMember>;
}