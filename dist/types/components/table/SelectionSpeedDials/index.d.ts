import { FunctionComponent } from 'react';
type Props = {
    selection: Record<string, any>;
    actionMessage: string;
    hidden?: boolean;
    actions?: any[];
    reset?: () => void;
};
export declare const SelectionSpeedDials: FunctionComponent<Props>;
export {};
