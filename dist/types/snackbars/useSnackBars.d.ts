import React from 'react';
import { EventDispatcher } from './EventDispatcher';
import { IntlMessage } from '../types/types';
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
export declare const useTranslateMessage: () => (notification: Notification) => string | undefined;
export declare const useSnackBars: (dispatcher: EventDispatcher) => void;
export {};
