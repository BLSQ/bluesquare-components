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

const styles: SxStyles = {
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
        maxWidth: '100%',
    },
};

export const SortableChip: FunctionComponent<
    SortableChipProps & ComponentProps<typeof Chip>
> = ({ id, label, onDelete, ...chipProps }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });
    return (
        <Chip
            component="div"
            ref={setNodeRef}
            label={
                <Box sx={styles.container}>
                    <DragIndicatorIcon
                        {...attributes}
                        {...listeners}
                        sx={styles.dragIcon}
                    />
                    <Box component="span" sx={styles.label}>
                        {label}
                    </Box>
                </Box>
            }
            color="secondary"
            {...chipProps}
            sx={{
                transform: CSS.Transform.toString(transform),
                transition,
                ...styles.chip,
            }}
            onDelete={onDelete}
        />
    );
};
