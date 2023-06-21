// Import requirements
import { User } from "discord.js";

// Import main class interface
import { ReactionsRoles } from "./ReactionsRoles";

// Import data
import { GuildReactionRole } from "./Data";

export interface ModuleEvents {
    ready: [client: ReactionsRoles];

    roleAdded: [user: User, data: GuildReactionRole];
    roleRemoved: [user: User, data: GuildReactionRole];
}