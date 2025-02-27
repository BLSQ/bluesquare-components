import React from 'react';
type Notification = {
    key: string;
    messageKey: string;
    message?: any;
    messageObject?: string | {
        id: string;
    };
    buttonMessageKey?: string;
    buttonAction?: () => void;
    errorLog?: string;
    id: string;
    options: {
        persist?: boolean;
        action?: React.ReactNode;
    };
};
export declare const useTranslateMessage: () => (notification: Notification) => any;
export declare const useSnackBars: (dispatcher?: import("./EventDispatcher").EventDispatcher) => void;
export {};
