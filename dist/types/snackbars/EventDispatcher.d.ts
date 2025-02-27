export declare class EventDispatcher {
    private listeners;
    constructor();
    addEventListener(event: any, callback: any): void;
    removeEventListener(event: any, callback: any): void;
    dispatch(event: any, data: any): void;
}
