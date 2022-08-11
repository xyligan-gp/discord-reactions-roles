import EventEmitter from "events";
const emitter = new EventEmitter();

import { Events } from "./Enums";

/**
 * Class that controls Module Emitter
 * 
 * @class
 * @classdesc Module Emitter Class
 * 
 * @private
 */
export class Emitter {
    /**
     * Method for listening module events
     * 
     * @param {Events} event Event Name
     * @param {any} data Event Data
     * 
     * @returns {EventEmitter} EventEmitter Class
     */
    on(event: Events, data: any): EventEmitter {
        return emitter.on(event, data);
    }

    /**
     * Method to listen for an module event only once
     * 
     * @param {Events} event Event Name
     * @param {any} data Event Data
     * 
     * @returns {EventEmitter} EventEmitter Class
     */
    once(event: Events, data: any): EventEmitter {
        return emitter.once(event, data);
    }

    /**
     * Method for emits module events
     * 
     * @param {Events} event Event Name
     * @param {any} args Event Args
     * 
     * @returns {boolean} Event emit status
     */
    emit(event: Events, ...args: any): boolean {
        return emitter.emit(event, ...args);
    }
}