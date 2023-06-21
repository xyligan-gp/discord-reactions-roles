// Import module requirements
import Enmap from "enmap";
import { Client, TextChannel } from "discord.js";

// Import utils interface
import { Utils } from "./Utils";

// Import data
import { CreateReactionsRolesData, EditReactionsRolesData, GuildReactionsRoles } from "./Data";

// Import options interfaces
import Options from "./Options";

// Import enums
import { ModuleEvents } from "./Events";

export type Awaitable<T> = T | PromiseLike<T>;

export enum EditMode {
	ADD = "EDIT_ADD",
	REMOVE = "EDIT_REMOVE"
}

export enum Events {
	READY = "ready",
	ROLE_ADDED = "roleAdded",
	ROLE_REMOVED = "roleRemoved"
}

export declare class ReactionsRoles {
    constructor(client: Client, options?: Options);

    private client: Client;

    public author: string;
    public website: string;
    public version: string;

    public ready: boolean | null;
    public readyTimestamp: number | null;

    public options: Options | null;
    public database: Enmap<string, GuildReactionsRoles[]> | null;

    public utils: Utils;

    /**
     * Method for creating new menus to distribute roles by reaction
     * 
     * @param channel Discord Guild text Channel
     * @param options Reactions Roles Options
     * 
     * @returns Object with the data of the created menu
     */
    public create(channel: TextChannel, options: CreateReactionsRolesData): Promise<GuildReactionsRoles>;

	/**
     * Method for retrieving role menu data by reaction
     * 
     * @param guildID Discord Guild ID
     * @param messageID Discord Guild Message ID
     * 
     * @returns Returns an object with role data by reaction
     */
	public get(guildID: string, messageID: string): Promise<GuildReactionsRoles>;

	/**
     * Method to get a list of menu roles by reaction for the server
     * 
     * @param guildID Discord Guild ID
     * 
     * @returns Returns the list of role menus by server response
     */
	public list(guildID: string): Promise<Arrau<GuildReactionsRoles>>;

	/**
     * Method for changing the menu of roles by reaction (adding/removing reactions)
     * 
     * @param guildID Discord Guild ID
     * @param messageID Discord Guild Message ID
     * @param mode Edit Mode
     * @param options Edit Options
     * 
     * @returns Modified menu data object
     */
	public edit(guildID: string, messageID: string, mode: EditMode, options: EditReactionsRolesData): Promise<GuildReactionsRoles>;

	/**
     * Method for removing server menus of roles by reaction
     * 
     * @param guildID Discord Guild ID
     * @param messageID Discord Guild Message ID
     * 
     * @returns Deletion state
     */
    public remove(guildID: string, messageID: string): Promise<boolean>;

    /**
     * Method for module initialization
     * 
     * @param options Module Options
     */
    private init(options?: Options): void;

	/**
	 * Method for module database initialization
	 */
    private initDatabase(): void;

	/**
	 * Method for starting client event tracking
	 */
	private monitorEvents(): void;

    public on<K extends keyof ModuleEvents>(event: K, listener: (...args: ModuleEvents[K]) => Awaitable<void>): this;
    public on<S extends string | symbol>(
		event: Exclude<S, keyof ModuleEvents>,
		listener: (...args: any[]) => Awaitable<void>,
    ): this;

    public once<K extends keyof ModuleEvents>(event: K, listener: (...args: ModuleEvents[K]) => Awaitable<void>): this;
    public once<S extends string | symbol>(
		event: Exclude<S, keyof ModuleEvents>,
		listener: (...args: any[]) => Awaitable<void>,
    ): this;

    public emit<K extends keyof ModuleEvents>(event: K, ...args: ModuleEvents[K]): boolean;
    public emit<S extends string | symbol>(event: Exclude<S, keyof ModuleEvents>, ...args: unknown[]): boolean;
}