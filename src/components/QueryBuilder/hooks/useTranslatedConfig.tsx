import React, { useMemo } from 'react';
import moment from 'moment';

import { Config, MuiConfig } from '@react-awesome-query-builder/mui';

import { useTheme } from '@mui/styles';
import { Box } from '@mui/material';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from '../messages';
import { apiDateFormat, apiDateTimeFormat } from '../constants';
import { TextInput } from '../../inputs/TextInput';
import { NumberInput } from '../../inputs/NumberInput';
import { Select } from '../../inputs/Select';
import { TimePicker } from '../../inputs/TimePicker';
import { DatePicker } from '../../DatePicker';
import { DateTimePicker } from '../../DateTimePicker';

export const useTranslatedConfig = (): Config => {
    const { formatMessage } = useSafeIntl();
    const theme = useTheme();
    return useMemo(
        () => ({
            ...MuiConfig,
            conjunctions: {
                ...MuiConfig.conjunctions,
                AND: {
                    ...MuiConfig.conjunctions.AND,
                    label: 'And',
                },
                OR: {
                    ...MuiConfig.conjunctions.OR,
                    label: 'Or',
                },
            },
            operators: {
                ...MuiConfig.operators,
                like: {
                    ...MuiConfig.operators.like,
                    label: formatMessage(MESSAGES.contains),
                },
                not_like: {
                    ...MuiConfig.operators.not_like,
                    label: formatMessage(MESSAGES.notLike),
                },
                starts_with: {
                    ...MuiConfig.operators.starts_with,
                    label: formatMessage(MESSAGES.startsWith),
                },
                ends_with: {
                    ...MuiConfig.operators.ends_with,
                    label: formatMessage(MESSAGES.endsWith),
                },
                between: {
                    ...MuiConfig.operators.between,
                    label: formatMessage(MESSAGES.between),
                },
                not_between: {
                    ...MuiConfig.operators.not_between,
                    label: formatMessage(MESSAGES.notBetween),
                },
                is_empty: {
                    ...MuiConfig.operators.is_empty,
                    label: formatMessage(MESSAGES.isEmpty),
                },
                is_not_empty: {
                    ...MuiConfig.operators.is_not_empty,
                    label: formatMessage(MESSAGES.isNotEmpty),
                },
                is_null: {
                    ...MuiConfig.operators.is_null,
                    label: formatMessage(MESSAGES.isNull),
                },
                is_not_null: {
                    ...MuiConfig.operators.is_not_null,
                    label: formatMessage(MESSAGES.isNotNull),
                },
                select_any_in: {
                    ...MuiConfig.operators.select_any_in,
                    label: formatMessage(MESSAGES.anyIn),
                },
                select_not_any_in: {
                    ...MuiConfig.operators.select_not_any_in,
                    label: formatMessage(MESSAGES.notAnyIn),
                },
                multiselect_equals: {
                    ...MuiConfig.operators.multiselect_equals,
                    label: formatMessage(MESSAGES.equals),
                },
                multiselect_not_equals: {
                    ...MuiConfig.operators.multiselect_not_equals,
                    label: formatMessage(MESSAGES.notEquals),
                },
                proximity: {
                    ...MuiConfig.operators.proximity,
                    label: formatMessage(MESSAGES.proximity),
                    valueLabels: [
                        {
                            label: formatMessage(MESSAGES.proximityValueLabel1),
                            placeholder: formatMessage(
                                MESSAGES.proximityValuePLaceholder1,
                            ),
                        },
                        {
                            label: formatMessage(MESSAGES.proximityValueLabel2),
                            placeholder: formatMessage(
                                MESSAGES.proximityValuePLaceholder2,
                            ),
                        },
                    ],
                    options: {
                        ...MuiConfig.operators.proximity.options,
                        optionLabel: formatMessage(
                            MESSAGES.proximityOptionsLabel,
                        ),
                        optionTextBefore: formatMessage(
                            MESSAGES.proximityOptionsLabel,
                        ),
                        optionPlaceholder: formatMessage(
                            MESSAGES.proximityOptionsPlaceholder,
                        ),
                    },
                },
                some: {
                    // @ts-ignore
                    ...MuiConfig.operators.some,
                    label: formatMessage(MESSAGES.some),
                },
                all: {
                    // @ts-ignore
                    ...MuiConfig.operators.all,
                    label: formatMessage(MESSAGES.all),
                },
                none: {
                    // @ts-ignore
                    ...MuiConfig.operators.none,
                    label: formatMessage(MESSAGES.none),
                },
            },
            widgets: {
                ...MuiConfig.widgets,
                text: {
                    ...MuiConfig.widgets.text,
                    // @ts-ignore
                    factory: ({ setValue, value, field }) => (
                        <TextInput
                            keyValue={`${field}`}
                            onChange={setValue}
                            value={value}
                            placeholder={formatMessage(
                                MESSAGES.textPlaceholder,
                            )}
                        />
                    ),
                },
                textarea: {
                    ...MuiConfig.widgets.textarea,
                    // @ts-ignore
                    factory: ({ setValue, value, field }) => (
                        <TextInput
                            keyValue={`${field}`}
                            onChange={setValue}
                            value={value}
                            multiline
                            placeholder={formatMessage(
                                MESSAGES.textareaPlaceholder,
                            )}
                        />
                    ),
                },
                number: {
                    ...MuiConfig.widgets.number,
                    // @ts-ignore
                    factory: ({ setValue, value, field }) => (
                        <Box display="inline-block" width="150px">
                            <NumberInput
                                keyValue={`${field}`}
                                onChange={setValue}
                                value={value}
                                placeholder={formatMessage(
                                    MESSAGES.numberPlaceholder,
                                )}
                            />
                        </Box>
                    ),
                },
                slider: {
                    ...MuiConfig.widgets.slider,
                    valueLabel: formatMessage(MESSAGES.numberLabel),
                    valuePlaceholder: formatMessage(MESSAGES.sliderPlaceholder),
                },
                select: {
                    ...MuiConfig.widgets.select,
                    // @ts-ignore
                    factory: ({ setValue, value, field, listValues }) => (
                        <Box display="inline-block" width="100%">
                            <Select
                                placeholder={formatMessage(
                                    MESSAGES.selectValue,
                                )}
                                value={value}
                                keyValue={`${field}`}
                                multi={false}
                                options={
                                    Array.isArray(listValues)
                                        ? listValues.map(listValue => ({
                                            value: listValue.value,
                                            label: listValue.title,
                                        }))
                                        : Object.entries(listValues || {}).map(([value, title]) => ({
                                            value,
                                            label: title,
                                        }))
                                }
                                onChange={setValue}
                            />
                        </Box>
                    ),
                },
                multiselect: {
                    ...MuiConfig.widgets.multiselect,
                    valuePlaceholder: formatMessage(MESSAGES.selectValues),
                    // @ts-ignore
                    factory: ({ setValue, value, field, listValues }) => {
                        console.log('value', value);
                        return (
                            <Box display="inline-block" width="100%">
                                <Select
                                    placeholder={formatMessage(
                                        MESSAGES.selectValues,
                                    )}
                                    value={value}
                                    keyValue={`${field}`}
                                    multi
                                    options={
                                        Array.isArray(listValues)
                                            ? listValues.map(listValue => ({
                                                value: listValue.value,
                                                label: listValue.title,
                                            }))
                                            : Object.entries(listValues || {}).map(([value, title]) => ({
                                                value,
                                                label: title,
                                            }))
                                    }
                                    onChange={setValue}
                                />
                            </Box>
                        );
                    },
                },
                date: {
                    ...MuiConfig.widgets.date,
                    // @ts-ignore
                    factory: ({ setValue, value }) => (
                        <DatePicker
                            onChange={newValue => {
                                setValue(moment(newValue).format(apiDateFormat));
                            }}
                            label=""
                            currentDate={value}
                            clearMessage={MESSAGES.clear}
                            clearable={false}
                        />
                    ),
                    dateFormat: 'DD.MM.YYYY',
                    valueFormat: apiDateFormat,
                    valueLabel: formatMessage(MESSAGES.date),
                    valuePlaceholder: formatMessage(MESSAGES.datePlaceholder),
                    valueLabels: [
                        {
                            label: formatMessage(MESSAGES.dateFrom),
                            placeholder: formatMessage(
                                MESSAGES.dateFromPlaceholder,
                            ),
                        },
                        {
                            label: formatMessage(MESSAGES.dateTo),
                            placeholder: formatMessage(
                                MESSAGES.dateToPlaceholder,
                            ),
                        },
                    ],
                },
                currentDate: {
                    ...MuiConfig.widgets.text,
                    // @ts-ignore
                    factory: ({ setValue, value }) => (
                        <DatePicker
                            onChange={newValue => {
                                const timestamp = moment(newValue, 'DD/MM/YYYY').valueOf().toString();
                                setValue(timestamp);
                            }}
                            label=""
                            currentDate={value ? moment(Number(value)) : undefined}
                            clearMessage={MESSAGES.clear}
                            clearable={false}
                        />
                    ),
                    valueLabel: formatMessage(MESSAGES.date),
                    valuePlaceholder: formatMessage(MESSAGES.datePlaceholder),
                    valueSources: ['value', 'field'],
                },
                currentDatetime: {
                    ...MuiConfig.widgets.text,
                    // @ts-ignore
                    factory: ({ setValue, value }) => (
                        <DateTimePicker
                            onChange={newValue => {
                                const timestamp = moment(newValue, 'DD/MM/YYYY').valueOf().toString();
                                setValue(timestamp);
                            }}
                            label=""
                            currentDate={value ? moment(Number(value)): undefined}
                            clearMessage={MESSAGES.clear}
                            clearable={false}
                        />
                    ),
                    valueLabel: formatMessage(MESSAGES.date),
                    valuePlaceholder: formatMessage(MESSAGES.datePlaceholder),
                    valueSources: ['value', 'field'],
                },
                time: {
                    ...MuiConfig.widgets.time,
                    timeFormat: 'HH:mm',
                    valueFormat: 'HH:mm:ss',
                    valueLabel: formatMessage(MESSAGES.time),
                    valuePlaceholder: formatMessage(MESSAGES.timePlaceholder),
                    valueLabels: [
                        {
                            label: formatMessage(MESSAGES.timeFrom),
                            placeholder: formatMessage(
                                MESSAGES.timeFromPlaceholder,
                            ),
                        },
                        {
                            label: formatMessage(MESSAGES.timeTo),
                            placeholder: formatMessage(
                                MESSAGES.timeToPlaceholder,
                            ),
                        },
                    ],
                    // @ts-ignore
                    factory: ({ setValue, value }) => (
                        <Box display="inline-block" width={150}>
                            <TimePicker
                                value={value ? moment(value, 'HH:mm') : null}
                                onChange={newValue =>
                                    setValue(
                                        newValue
                                            ? newValue.format('HH:mm')
                                            : undefined,
                                    )
                                }
                            />
                        </Box>
                    ),
                },
                datetime: {
                    ...MuiConfig.widgets.datetime,
                    timeFormat: 'HH:mm',
                    dateFormat: 'DD.MM.YYYY',
                    valueFormat: 'YYYY-MM-DD HH:mm:ss',
                    // @ts-ignore
                    factory: ({ setValue, value }) => (
                        <DateTimePicker
                            onChange={newValue => {
                                setValue(moment(newValue).format(apiDateTimeFormat));
                            }}
                            label=""
                            currentDate={value}
                            clearMessage={MESSAGES.clear}
                            clearable={false}
                        />
                    ),
                    valueLabel: formatMessage(MESSAGES.datetime),
                    valuePlaceholder: formatMessage(
                        MESSAGES.datetimePlaceholder,
                    ),
                    valueLabels: [
                        {
                            label: formatMessage(MESSAGES.datetimeFrom),
                            placeholder: formatMessage(
                                MESSAGES.datetimeFromPlaceholder,
                            ),
                        },
                        {
                            label: formatMessage(MESSAGES.datetimeTo),
                            placeholder: formatMessage(
                                MESSAGES.datetimeToPlaceholder,
                            ),
                        },
                    ],
                },
                boolean: {
                    ...MuiConfig.widgets.boolean,
                    labelYes: formatMessage(MESSAGES.yes),
                    labelNo: formatMessage(MESSAGES.no),
                },
                field: {
                    ...MuiConfig.widgets.field,
                    valueLabel: formatMessage(MESSAGES.fieldCompare),
                    valuePlaceholder: formatMessage(MESSAGES.fieldPlaceholder),
                },
                func: {
                    ...MuiConfig.widgets.func,
                    valueLabel: formatMessage(MESSAGES.function),
                    valuePlaceholder: formatMessage(MESSAGES.selectFunction),
                },
                rangeslider: {
                    ...MuiConfig.widgets.rangeslider,
                    valueLabel: formatMessage(MESSAGES.function),
                    valuePlaceholder: formatMessage(MESSAGES.selectFunction),
                    valueLabels: [
                        {
                            label: formatMessage(MESSAGES.rangeFrom),
                            placeholder: formatMessage(
                                MESSAGES.rangeFromPlaceholder,
                            ),
                        },
                        {
                            label: formatMessage(MESSAGES.rangeTo),
                            placeholder: formatMessage(
                                MESSAGES.rangeToPlaceholder,
                            ),
                        },
                    ],
                },
            },
            types: {
                ...MuiConfig.types,
                '!group': {
                    ...MuiConfig.types['!group'],
                    widgets: {
                        ...MuiConfig.types['!group'].widgets,
                        // comment this as unused for now
                        // number: {
                        //     ...MuiConfig.types['!group'].widgets.number,
                        //     opProps: {
                        //         equal: {
                        //             label: formatMessage(MESSAGES.countEqual),
                        //         },
                        //         not_equal: {
                        //             label: formatMessage(
                        //                 MESSAGES.countNotEqual,
                        //             ),
                        //         },
                        //         less: {
                        //             label: formatMessage(MESSAGES.countLess),
                        //         },
                        //         less_or_equal: {
                        //             label: formatMessage(
                        //                 MESSAGES.countLessOrEqual,
                        //             ),
                        //         },
                        //         greater: {
                        //             label: formatMessage(MESSAGES.countGreater),
                        //         },
                        //         greater_or_equal: {
                        //             label: formatMessage(
                        //                 MESSAGES.countGreaterOrEqual,
                        //             ),
                        //         },
                        //         between: {
                        //             label: formatMessage(MESSAGES.countBetween),
                        //         },
                        //         not_between: {
                        //             label: formatMessage(
                        //                 MESSAGES.countNotBetween,
                        //             ),
                        //         },
                        //     },
                        // },
                    },
                },
                currentDate: {
                    defaultOperator: 'equal',
                    mainWidget: 'currentDate',
                    widgets: {
                        currentDate: {
                            operators: [
                                'equal',
                                'not_equal',
                                'greater_or_equal',
                                'less_or_equal',
                            ],
                            widgetProps: {},
                            opProps: {},
                        },
                    },
                },
                currentDatetime: {
                    defaultOperator: 'equal',
                    mainWidget: 'currentDatetime',
                    widgets: {
                        currentDatetime: {
                            operators: [
                                'equal',
                                'not_equal',
                                'greater_or_equal',
                                'less_or_equal',
                            ],
                            widgetProps: {},
                            opProps: {},
                        },
                    },
                },
            },
            settings: {
                ...MuiConfig.settings,
                theme: {
                    mui: theme,
                },
                valueSourcesInfo: {
                    ...MuiConfig.settings.valueSourcesInfo,
                    value: {
                        label: formatMessage(MESSAGES.value),
                    },
                    field: {
                        label: formatMessage(MESSAGES.field),
                        widget: 'field',
                    },
                    func: {
                        label: formatMessage(MESSAGES.function),
                        widget: 'func',
                    },
                },
                locale: {
                    ...MuiConfig.settings.locale,
                    moment: moment.locale(),
                },
                // @ts-ignore
                renderField: ({ items, setField, id, selectedKey }) => {
                    return (
                        <Box display="inline-block" width="100%">
                            <Select
                                placeholder={formatMessage(
                                    MESSAGES.selectField,
                                )}
                                keyValue={`${id}`}
                                multi={false}
                                options={(items || []).map(item => ({
                                    value: item.path,
                                    label: item.label,
                                }))}
                                onChange={setField}
                                value={selectedKey}
                            />
                        </Box>
                    );
                },
                // @ts-ignore
                renderOperator: ({ items, setField, id, selectedKey }) => (
                    <Box display="inline-block" width={95}>
                        <Select
                            placeholder={formatMessage(MESSAGES.selectField)}
                            clearable={false}
                            keyValue={`${id}`}
                            multi={false}
                            options={(items || []).map(item => ({
                                value: item.key,
                                label: item.label,
                            }))}
                            onChange={setField}
                            value={selectedKey}
                        />
                    </Box>
                ),
                valueLabel: formatMessage(MESSAGES.value),
                valuePlaceholder: formatMessage(MESSAGES.value),
                fieldLabel: formatMessage(MESSAGES.field),
                operatorLabel: formatMessage(MESSAGES.operator),
                funcLabel: formatMessage(MESSAGES.function),
                fieldPlaceholder: formatMessage(MESSAGES.selectField),
                funcPlaceholder: formatMessage(MESSAGES.selectFunction),
                operatorPlaceholder: formatMessage(MESSAGES.selectOperator),
                lockLabel: formatMessage(MESSAGES.lock),
                lockedLabel: formatMessage(MESSAGES.locked),
                addGroupLabel: formatMessage(MESSAGES.addGroup),
                addCaseLabel: formatMessage(MESSAGES.addCondition),
                addDefaultCaseLabel: formatMessage(MESSAGES.addDefaultCase),
                defaultCaseLabel: formatMessage(MESSAGES.defaultCase),
                addRuleLabel: formatMessage(MESSAGES.addRule),
                addSubRuleLabel: formatMessage(MESSAGES.addSubRule),
                // notLabel: formatMessage(MESSAGES.not),
                valueSourcesPopupTitle: formatMessage(
                    MESSAGES.valueSourcesPopupTitle,
                ),
            },
        }),
        [formatMessage, theme],
    );
};
