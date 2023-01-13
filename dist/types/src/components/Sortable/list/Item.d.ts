import { ReactNode, FunctionComponent } from 'react';
import { HandleProps } from './types';
declare type Props = {
    id: string;
    children: (handleProps?: HandleProps) => ReactNode;
    handle?: boolean;
    isLast?: boolean;
};
export declare const SortableItem: FunctionComponent<Props>;
export {};
//# sourceMappingURL=Item.d.ts.map