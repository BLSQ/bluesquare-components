import { FunctionComponent } from 'react';
type Props = {
    column: Record<string, any>;
    columnsProps: Record<string, any>;
    setSortBy: (sort: {
        desc: boolean;
        id: any;
    }[]) => void;
    multiSortEnabled: boolean;
    sortBy: {
        desc: boolean;
        id: any;
    }[];
    isLastCell: boolean;
};
export declare const HeadCell: FunctionComponent<Props>;
export {};
