import { FunctionComponent } from 'react';
import { IntlMessage } from '../../../types/types';
declare type Props = {
    label: IntlMessage;
    value: string;
    onClick: () => void;
    dataTestId?: string;
    onClear: () => void;
};
export declare const TriggerModal: FunctionComponent<Props>;
export {};
