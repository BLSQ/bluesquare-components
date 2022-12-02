import { ReactNode, FunctionComponent } from 'react';
import { RenderProps } from './types';
declare type Props = {
    items: any[];
    onChange: (items: any[]) => void;
    renderItem: ({ item, index, handleProps }: RenderProps) => ReactNode;
    handle?: boolean;
    disabled?: boolean;
};
export declare const SortableList: FunctionComponent<Props>;
export {};
