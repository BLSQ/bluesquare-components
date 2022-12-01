import { ReactNode, FunctionComponent } from 'react';
declare type RenderProps = {
    item: any;
    index: number;
    handleProps?: any;
};
declare type Props = {
    items: any[];
    handle?: boolean;
    disabled?: boolean;
    onChange: (items: any[]) => void;
    renderItem: ({ item, index, handleProps }: RenderProps) => ReactNode;
    getItemId?: (item: any) => string;
};
export declare const SortableList: FunctionComponent<Props>;
export {};
