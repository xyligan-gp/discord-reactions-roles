// Import requirement
import { EmbedData, Role } from "discord.js";

export interface GuildReactionsRoles {
    author: string;
    created: number;
    updated: number;
    messages: ReactionsRolesMessages;

    channelID: string;
    messageID: string;

    data: GuildReactionRole[];
}

export interface GuildReactionRole {
    id: string | null;
    name: string | null;
    raw: string;
    roleID: string;

    added: number;
    animated: boolean;
}

export interface CreateReactionsRolesData {
    mentionEveryone?: boolean;

    role: Role;
    emoji: string;
    embed?: EmbedData;
    author?: string;
    messages?: ReactionsRolesMessages;
}

export interface EditReactionsRolesData {
    role: Role;
    emoji: string;
}

export interface ReactionsRolesMessages {
    started?: string;
    ended?: string;
}

export interface ParsedEmoji {
    id: string;
    name: string;
    raw: string;
    isValid: boolean;
    unicode: boolean;
    animated: boolean;
}