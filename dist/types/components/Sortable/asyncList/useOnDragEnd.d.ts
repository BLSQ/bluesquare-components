export declare const useOnDragEnd: <T>(items: T[], onReorder?: (arg0: {
    resume: () => void;
    abort: () => void;
    items: T[];
}) => void) => (event: {
    suspend: () => {
        resume: () => void;
        abort: () => void;
    };
    canceled?: boolean;
    operation: any;
}) => void;
