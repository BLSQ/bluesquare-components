import { useCallback } from 'react';
import { arrayMove } from '@dnd-kit/helpers';
import { isSortable } from '@dnd-kit/react/sortable';

export const useOnDragEnd = <T>(
    items: T[],
    onReorder?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: T[];
    }) => void,
) =>
    useCallback(
        (event: {
            suspend: () => { resume: () => void; abort: () => void };
            canceled?: boolean;
            operation: any;
        }) => {
            if (event.canceled) return;

            const { source } = event.operation;

            if (isSortable(source)) {
                const { initialIndex, index } = source as {
                    initialIndex: number;
                    index: number;
                };

                if (initialIndex === index) return;

                const newOrder = arrayMove(items, initialIndex, index);

                const { resume, abort } = event.suspend();

                if (onReorder) {
                    onReorder({ resume, abort, items: newOrder });
                }
            }
        },
        [items, onReorder],
    );
