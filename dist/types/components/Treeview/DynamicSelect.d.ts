import { FunctionComponent, ReactNode } from 'react';
import { IntlMessage } from '../../types/types';
type Props = {
    request: (id: number) => any;
    makeDropDownText: (element: any) => string;
    onSelect?: (element: any) => void;
    minResultCount?: number;
    inputLabelObject?: IntlMessage;
    withSearchButton?: boolean;
    toolTip?: (element: any, tooltipIcon: any) => ReactNode;
    dependency?: any;
};
export declare const DynamicSelect: FunctionComponent<Props>;
export {};
