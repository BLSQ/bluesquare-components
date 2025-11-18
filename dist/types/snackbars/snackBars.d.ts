export declare const formSuccessFullMessageKey = "successful";
export declare const formErrorMessageKey = "error";
export declare const formWarningMessageKey = "warning";
export declare const buttonReloadMessageKey = "reload";
export declare const reloadPageMessageKey = "reloadPage";
export declare const succesfullSnackBar: (messageKey: any, messageObject: any) => {
    messageKey: any;
    messageObject: any;
    options: {
        variant: string;
        persist: boolean;
    };
};
export declare const errorSnackBar: (messageKey: any, messageObject: any, errorLog: any) => {
    messageKey: any;
    messageObject: any;
    options: {
        variant: string;
        persist: boolean;
    };
    errorLog: any;
    id: string;
};
export declare const warningSnackBar: (messageKey: any, messageObject: any, id: any) => {
    messageKey: any;
    messageObject: any;
    options: {
        maxsnack: number;
        variant: string;
        persist: boolean;
    };
    id: any;
};
export declare const reloadPageSnackBar: (buttonMessageKey?: string, messageKey?: string) => {
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
