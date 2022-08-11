import { User } from "discord.js";

import { ReactionsRoles } from "./ReactionsRoles";

import { GuildReactionRole } from "./Data";

export interface ModuleEvents {
    ready: [client: ReactionsRoles];

    roleAdded: [user: User, data: GuildReactionRole];
    roleRemoved: [user: User, data: GuildReactionRole];
}