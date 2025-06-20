import React, { ComponentProps, FunctionComponent } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Chip, Box } from '@mui/material';
import { SxStyles } from '../../styles/iaso/types';

type SortableChipProps = {
    id: string;
    label: string;
    onDelete?: (e: React.MouseEvent) => void;
};

export const sortableChipStyles: SxStyles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    dragIcon: {
        cursor: 'grab',
        mr: 0.5,
        fontSize: '16px',
        flexShrink: 0,
    },
    label: {
        maxWidth: '200px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    chip: {
        marginRight: 4,
        marginBottom: 4,
        color: 'white',
    },
};

export const SortableChip: FunctionComponent<
    SortableChipProps & ComponentProps<typeof Chip>
> = ({ id, label, onDelete, ...chipProps }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });
    return (
        <Chip
            component="div"
            ref={setNodeRef}
            label={
                <Box sx={sortableChipStyles.container}>
                    <DragIndicatorIcon
                        {...attributes}
                        {...listeners}
                        sx={sortableChipStyles.dragIcon}
                    />
                    <Box component="span" sx={sortableChipStyles.label}>
                        {label}
                    </Box>
                </Box>
            }
            color="secondary"
            {...chipProps}
            sx={{
                transform: transform
                    ? CSS.Translate.toString(transform)
                    : undefined,
                transition,
                ...sortableChipStyles.chip,
                opacity: isDragging ? 0.4 : 1,
                maxWidth: '100%',
            }}
            onDelete={onDelete}
        />
    );
};
