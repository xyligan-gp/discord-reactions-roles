export default interface Options {
    deleteOldMenus?: boolean;
    deleteOldMenusReactions?: boolean;
    
    database?: DatabaseConfiguration;
}

interface DatabaseConfiguration {
    name?: string;
    path?: string;
}