import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

export type Item = {
    id: string | number;
};

export type HandleProps = DraggableAttributes & SyntheticListenerMap;
export type RenderProps = {
    item: any;
    index: number;
    handleProps?: HandleProps;
};
