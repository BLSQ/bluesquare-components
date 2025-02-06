export class EventDispatcher {
    private listeners: { [key: string]: ((data: any) => void)[] };

    constructor() {
        this.listeners = {};
    }

    addEventListener(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    removeEventListener(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(
                listener => listener !== callback,
            );
        }
    }

    dispatch(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}

// TODO check if this should be instantiated in project, i.o library
export const dispatcher = new EventDispatcher();

export const openSnackBar = (data: any) =>
    dispatcher.dispatch('snackbar', data);
