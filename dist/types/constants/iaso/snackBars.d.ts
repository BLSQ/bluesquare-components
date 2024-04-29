export const formSuccessFullMessageKey: "successful";
export const formErrorMessageKey: "error";
export const formWarningMessageKey: "warning";
export const buttonReloadMessageKey: "reload";
export const reloadPageMessageKey: "reloadPage";
export function success(messageKey: string | undefined, messageObject: any): {
    messageKey: string;
    messageObject: any;
    options: {
        variant: string;
        persist: boolean;
    };
};
export function error(messageKey: string | undefined, messageObject: any, errorLog: any): {
    messageKey: string;
    messageObject: any;
    options: {
        variant: string;
        persist: boolean;
    };
    errorLog: any;
    id: string;
};
export function warning(messageKey: string | undefined, messageObject: any, id: any): {
    messageKey: string;
    messageObject: any;
    options: {
        maxsnack: number;
        variant: string;
        persist: boolean;
    };
    id: any;
};
export function reloadPage(buttonMessageKey?: string, messageKey?: string): {
    messageKey: string;
    type: string;
    options: {
        maxsnack: number;
        variant: string;
        persist: boolean;
    };
    buttonMessageKey: string;
    buttonAction: () => void;
};
