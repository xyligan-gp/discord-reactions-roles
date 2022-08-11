/**
 * Module events enum
 * 
 * @typedef {object} Events
 * 
 * @prop {string} READY Module ready event
 * @prop {string} ROLE_ADDED Module 'roleAdded' event
 * @prop {string} ROLE_REMOVED Module 'roleRemoved' event
 */
export enum Events {
    READY = "ready",
    ROLE_ADDED = "roleAdded",
    ROLE_REMOVED = "roleRemoved"
}

/**
 * Edit mode enum
 * 
 * @typedef {object} EditMode
 * 
 * @prop {string} ADD Add new data mode
 * @prop {string} REMOVE Delete old data mode
 */
export enum EditMode {
    ADD = "EDIT_ADD",
    REMOVE = "EDIT_REMOVE"
}