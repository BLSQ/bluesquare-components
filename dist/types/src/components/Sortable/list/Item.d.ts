import { ReactNode, FunctionComponent } from 'react';
declare type Props = {
    id: string;
    children: (handleProps: any) => ReactNode;
    handle?: boolean;
};
export declare const SortableItem: FunctionComponent<Props>;
export {};
