import { FunctionComponent } from 'react';
import { RenderProps } from './types';
declare type Props = {
    items: any[];
    onChange: (items: any[]) => void;
    RenderItem: FunctionComponent<RenderProps>;
    handle?: boolean;
    disabled?: boolean;
};
export declare const SortableList: FunctionComponent<Props>;
export {};
//# sourceMappingURL=index.d.ts.map