import React, {
    useState,
    useCallback,
    FunctionComponent,
    SyntheticEvent,
    useMemo,
} from 'react';
import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragOverlay,
    pointerWithin,
    CollisionDetection,
    DragOverEvent,
} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import DragIndicator from '@mui/icons-material/DragIndicator';
import {
    Autocomplete,
    Box,
    Chip,
    FormHelperText,
    TextField,
} from '@mui/material';
import { SxStyles } from '../../styles/iaso/types';
import { SortableChip, sortableChipStyles } from './SortableChip';

type Option = {
    label: string;
    value: string;
};

type Props = {
    options: Option[];
    label: string;
    value?: Option[];
    onChange: (value: string[]) => void;
    disabled?: boolean;
    isRequired?: boolean;
    helperText?: string;
    keyValue: string;
};

const styles: SxStyles = {
    tagsContainer: { display: 'flex', flexWrap: 'wrap' },
    helperText: { pl: 2, color: 'grey.500' },
};

const disableSortingStrategy = () => null;

export const DndSelect: FunctionComponent<Props> = ({
    options,
    label,
    value = [],
    onChange,
    disabled,
    isRequired,
    helperText,
    keyValue,
}) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
    );

    const handleChange = useCallback(
        (_: SyntheticEvent, newValue: Option[]) => {
            onChange(newValue.map(item => item.value));
        },
        [onChange],
    );

    const handleDragStart = useCallback((event: DragStartEvent) => {
        if (event.active.id !== activeId) {
            setActiveId(event.active.id as string);
        }
    }, [activeId]);

    const handleDragOver = useCallback(
        (event: DragOverEvent) => {
            const { active, over } = event;

            if (over && active.id !== over.id) {
                const oldIndex = value.findIndex(
                    item => `${keyValue}-${item.value}` === active.id,
                );
                const newIndex = value.findIndex(
                    item => `${keyValue}-${item.value}` === over.id,
                );
                if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
                    const newOrder = arrayMove(value, oldIndex, newIndex);
                    const newValues = newOrder.map(item => item.value);
                    if (JSON.stringify(newValues) !== JSON.stringify(value.map(item => item.value))) {
                        onChange(newValues);
                    }
                }
            }
        },
        [value, onChange, keyValue],
    );

    const handleDragEnd = useCallback(() => {
        setActiveId(null);
    }, []);

    const renderTags = useCallback(
        (currentValue: Option[], getTagProps: any) => (
            <SortableContext
                items={currentValue.map(item => `${keyValue}-${item.value}`)}
                strategy={disableSortingStrategy}
            >
                <Box sx={styles.tagsContainer}>
                    {currentValue.map((option, index) => (
                        <SortableChip
                            key={`${keyValue}-${option.value}`}
                            id={`${keyValue}-${option.value}`}
                            label={option.label}
                            {...getTagProps({ index })}
                        />
                    ))}
                </Box>
            </SortableContext>
        ),
        [keyValue],
    );

    const activeOption = useMemo(() => {
        if (!activeId) return null;
        return value.find(option => `${keyValue}-${option.value}` === activeId);
    }, [activeId, value, keyValue]);

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={pointerWithin as CollisionDetection}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragEnd}
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
            <DragOverlay wrapperElement="div" style={{ width: 'fit-content' }}>
                {activeOption ? (
                    <Chip
                        label={
                            <Box sx={sortableChipStyles.container}>
                                <DragIndicator
                                    sx={{
                                        ...sortableChipStyles.dragIcon,
                                        cursor: 'grabbing',
                                    }}
                                />
                                <Box
                                    component="span"
                                    sx={sortableChipStyles.label}
                                >
                                    {activeOption.label}
                                </Box>
                            </Box>
                        }
                        color="secondary"
                        sx={{
                            ...sortableChipStyles.chip,
                            margin: 0,
                            cursor: 'grabbing',
                        }}
                        onDelete={() => {}}
                    />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};
