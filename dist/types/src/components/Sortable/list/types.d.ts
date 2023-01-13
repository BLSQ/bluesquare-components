import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
export declare type Item = {
    id: string | number;
};
export declare type HandleProps = DraggableAttributes & SyntheticListenerMap;
export declare type RenderProps = {
    item: any;
    index: number;
    handleProps?: HandleProps;
};
//# sourceMappingURL=types.d.ts.map