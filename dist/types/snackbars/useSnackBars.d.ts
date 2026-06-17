import React from 'react';
import { IntlMessage } from '../types/types';
import { EventDispatcher } from './EventDispatcher';
type Notification = {
    key: string;
    messageKey: string;
    message?: any;
    messageObject?: string | IntlMessage;
    buttonMessageKey?: string;
    buttonAction?: () => void;
    errorLog?: string;
    id: string;
    options: {
        persist?: boolean;
        action?: React.ReactNode;
    };
};
export declare const useTranslateMessage: () => (notification: Notification) => string;
export declare const useSnackBars: (dispatcher: EventDispatcher) => void;
export {};
