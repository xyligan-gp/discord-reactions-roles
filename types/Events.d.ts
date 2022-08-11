import { MessageReaction, User } from "discord.js";
import { GuildReactionsRoles } from "./Data";
import { ReactionsRoles } from "./ReactionsRoles";

export interface ModuleEvents {
    ready: [client: ReactionsRoles];

    roleAdded: [reaction: MessageReaction, user: User, data: GuildReactionsRoles];
    roleRemoved: [reaction: MessageReaction, user: User, data: GuildReactionsRoles];
}