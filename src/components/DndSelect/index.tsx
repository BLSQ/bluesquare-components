import React, { useCallback, FunctionComponent, SyntheticEvent } from 'react';
import {
    DndContext,
    DragOverEvent,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Autocomplete, TextField, FormHelperText, Box } from '@mui/material';
import { SxStyles } from '../../styles/iaso/types';
import { SortableChip } from './SortableChip';

type Option = {
    label: string;
    value: string;
};

type Props = {
    options: Option[];
    label: string;
    value: Option[];
    onChange: (value: string[]) => void;
    disabled?: boolean;
    isRequired?: boolean;
    helperText?: string;
};

const styles: SxStyles = {
    tagsContainer: { display: 'flex', flexWrap: 'wrap' },
    helperText: { pl: 2, color: 'grey.500' },
};

export const DndSelect: FunctionComponent<Props> = ({
    options,
    label,
    value,
    onChange,
    disabled,
    isRequired,
    helperText,
}) => {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // 5px tolerance before drag starts
            },
        }),
    );

    const handleChange = useCallback(
        (_: SyntheticEvent, newValue: Option[]) => {
            onChange(newValue.map(item => item.value));
        },
        [onChange],
    );

    const handleDragOver = useCallback(
        (event: DragOverEvent) => {
            const { active, over } = event;
            if (!over || active.id === over.id) return;

            const oldIndex = value.findIndex(item => item.value === active.id);
            const newIndex = value.findIndex(item => item.value === over.id);

            const newOrder = arrayMove(value, oldIndex, newIndex);
            onChange(newOrder.map(item => item.value));
        },
        [value, onChange],
    );

    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            const { active, over } = event;
            if (!over || active.id === over.id) return;

            const oldIndex = value.findIndex(item => item.value === active.id);
            const newIndex = value.findIndex(item => item.value === over.id);

            const newOrder = arrayMove(value, oldIndex, newIndex);
            onChange(newOrder.map(item => item.value));
        },
        [value, onChange],
    );

    const renderTags = useCallback(
        (currentValue: Option[], getTagProps: any) => (
            <Box sx={styles.tagsContainer}>
                <SortableContext
                    items={currentValue.map(item => item.value)}
                    strategy={verticalListSortingStrategy}
                >
                    {currentValue.map((option, index) => (
                        <SortableChip
                            key={option.value}
                            id={option.value}
                            label={option.label}
                            {...getTagProps({ index })}
                        />
                    ))}
                </SortableContext>
            </Box>
        ),
        [],
    );

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <Autocomplete
                multiple
                options={options}
                getOptionLabel={option => option.label}
                value={value}
                onChange={handleChange}
                renderInput={params => (
                    <TextField
                        {...params}
                        label={isRequired ? `${label} *` : label}
                    />
                )}
                filterSelectedOptions
                renderTags={renderTags}
                disabled={disabled}
            />
            {helperText && (
                <FormHelperText sx={styles.helperText}>
                    {helperText}
                </FormHelperText>
            )}
        </DndContext>
    );
};
