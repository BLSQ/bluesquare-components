import { FunctionComponent } from 'react';
import { IntlMessage } from '../../../types/types';
type Count = {
    index: number;
    count: number;
};
type Props = {
    params: Record<string, string>;
    paramKey: string;
    addMessage: IntlMessage;
    deleteMessage: IntlMessage;
    tabParamKey: string;
    defaultItem: Record<string, any>;
    baseLabel?: string;
    maxItems?: number;
    displayCounts?: boolean;
    counts?: Count[];
    onTabsDeleted?: (newParams: Record<string, string>) => void;
    onTabsAdded: (newParams: Record<string, string>) => void;
    onTabChange?: (newParams: Record<string, string>) => void;
};
declare const DynamicTabs: FunctionComponent<Props>;
export { DynamicTabs };
