import { FunctionComponent } from 'react';
type Props = {
    countOptions?: number[];
    resultsCount?: number;
    handleSelect?: (newResultCount: any) => void;
};
export declare const TreeViewResultsCountSelect: FunctionComponent<Props>;
export {};
