import moment from 'moment';

import MaterialConfig from 'react-awesome-query-builder/lib/config/material';
import { Config } from 'react-awesome-query-builder';

import { useMemo } from 'react';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from '../messages';

export const useTranslatedConfig = (): Config => {
    const { formatMessage } = useSafeIntl();
    return useMemo(
        () => ({
            ...MaterialConfig,
            conjunctions: {
                ...MaterialConfig.conjunctions,
                AND: {
                    ...MaterialConfig.conjunctions.AND,
                    label: 'And',
                },
                OR: {
                    ...MaterialConfig.conjunctions.OR,
                    label: 'Or',
                },
            },
            operators: {
                ...MaterialConfig.operators,
                like: {
                    ...MaterialConfig.operators.like,
                    label: formatMessage(MESSAGES.contains),
                },
                not_like: {
                    ...MaterialConfig.operators.not_like,
                    label: formatMessage(MESSAGES.notLike),
                },
                starts_with: {
                    ...MaterialConfig.operators.starts_with,
                    label: formatMessage(MESSAGES.startsWith),
                },
                ends_with: {
                    ...MaterialConfig.operators.ends_with,
                    label: formatMessage(MESSAGES.endsWith),
                },
                between: {
                    ...MaterialConfig.operators.between,
                    label: formatMessage(MESSAGES.between),
                },
                not_between: {
                    ...MaterialConfig.operators.not_between,
                    label: formatMessage(MESSAGES.notBetween),
                },
                is_empty: {
                    ...MaterialConfig.operators.is_empty,
                    label: formatMessage(MESSAGES.isEmpty),
                },
                is_not_empty: {
                    ...MaterialConfig.operators.is_not_empty,
                    label: formatMessage(MESSAGES.isNotEmpty),
                },
                is_null: {
                    ...MaterialConfig.operators.is_null,
                    label: formatMessage(MESSAGES.isNull),
                },
                is_not_null: {
                    ...MaterialConfig.operators.is_not_null,
                    label: formatMessage(MESSAGES.isNotNull),
                },
                select_any_in: {
                    ...MaterialConfig.operators.select_any_in,
                    label: formatMessage(MESSAGES.anyIn),
                },
                select_not_any_in: {
                    ...MaterialConfig.operators.select_not_any_in,
                    label: formatMessage(MESSAGES.notAnyIn),
                },
                multiselect_equals: {
                    ...MaterialConfig.operators.multiselect_equals,
                    label: formatMessage(MESSAGES.equals),
                },
                multiselect_not_equals: {
                    ...MaterialConfig.operators.multiselect_not_equals,
                    label: formatMessage(MESSAGES.notEquals),
                },
                proximity: {
                    ...MaterialConfig.operators.proximity,
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
                        ...MaterialConfig.operators.proximity.options,
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
                    ...MaterialConfig.operators.some,
                    label: formatMessage(MESSAGES.some),
                },
                all: {
                    // @ts-ignore
                    ...MaterialConfig.operators.all,
                    label: formatMessage(MESSAGES.all),
                },
                none: {
                    // @ts-ignore
                    ...MaterialConfig.operators.none,
                    label: formatMessage(MESSAGES.none),
                },
            },
            widgets: {
                ...MaterialConfig.widgets,
                text: {
                    ...MaterialConfig.widgets.text,
                    valueLabel: formatMessage(MESSAGES.textLabel),
                    valuePlaceholder: formatMessage(MESSAGES.textPlaceholder),
                },
                textarea: {
                    ...MaterialConfig.widgets.textarea,
                    valueLabel: formatMessage(MESSAGES.texareaLabel),
                    valuePlaceholder: formatMessage(
                        MESSAGES.textareaPlaceholder,
                    ),
                },
                number: {
                    ...MaterialConfig.widgets.number,
                    valueLabel: formatMessage(MESSAGES.numberLabel),
                    valuePlaceholder: formatMessage(MESSAGES.numberPlaceholder),
                    // valuePlaceholder: ' ',
                    valueLabels: [
                        {
                            label: formatMessage(MESSAGES.numberFromLabel),
                            placeholder: formatMessage(
                                MESSAGES.numberFromPlaceholder,
                            ),
                        },
                        {
                            label: formatMessage(MESSAGES.numberToLabel),
                            placeholder: formatMessage(
                                MESSAGES.numberToPlaceholder,
                            ),
                        },
                    ],
                },
                slider: {
                    ...MaterialConfig.widgets.slider,
                    valueLabel: formatMessage(MESSAGES.numberLabel),
                    valuePlaceholder: formatMessage(MESSAGES.sliderPlaceholder),
                },
                select: {
                    ...MaterialConfig.widgets.select,
                    valueLabel: formatMessage(MESSAGES.value),
                    valuePlaceholder: formatMessage(MESSAGES.selectValue),
                },
                multiselect: {
                    ...MaterialConfig.widgets.multiselect,
                    valueLabel: formatMessage(MESSAGES.values),
                    valuePlaceholder: formatMessage(MESSAGES.selectValues),
                },
                date: {
                    ...MaterialConfig.widgets.date,
                    dateFormat: 'DD.MM.YYYY',
                    valueFormat: 'YYYY-MM-DD',
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
                time: {
                    ...MaterialConfig.widgets.time,
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
                },
                datetime: {
                    ...MaterialConfig.widgets.datetime,
                    timeFormat: 'HH:mm',
                    dateFormat: 'DD.MM.YYYY',
                    valueFormat: 'YYYY-MM-DD HH:mm:ss',
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
                    ...MaterialConfig.widgets.boolean,
                    labelYes: formatMessage(MESSAGES.yes),
                    labelNo: formatMessage(MESSAGES.no),
                },
                field: {
                    ...MaterialConfig.widgets.field,
                    valueLabel: formatMessage(MESSAGES.fieldCompare),
                    valuePlaceholder: formatMessage(MESSAGES.fieldPlaceholder),
                },
                func: {
                    ...MaterialConfig.widgets.func,
                    valueLabel: formatMessage(MESSAGES.function),
                    valuePlaceholder: formatMessage(MESSAGES.selectFunction),
                },
                rangeslider: {
                    ...MaterialConfig.widgets.rangeslider,
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
                ...MaterialConfig.types,
                '!group': {
                    ...MaterialConfig.types['!group'],
                    widgets: {
                        ...MaterialConfig.types['!group'].widgets,
                        number: {
                            ...MaterialConfig.types['!group'].widgets.number,
                            opProps: {
                                equal: {
                                    label: formatMessage(MESSAGES.countEqual),
                                },
                                not_equal: {
                                    label: formatMessage(
                                        MESSAGES.countNotEqual,
                                    ),
                                },
                                less: {
                                    label: formatMessage(MESSAGES.countLess),
                                },
                                less_or_equal: {
                                    label: formatMessage(
                                        MESSAGES.countLessOrEqual,
                                    ),
                                },
                                greater: {
                                    label: formatMessage(MESSAGES.countGreater),
                                },
                                greater_or_equal: {
                                    label: formatMessage(
                                        MESSAGES.countGreaterOrEqual,
                                    ),
                                },
                                between: {
                                    label: formatMessage(MESSAGES.countBetween),
                                },
                                not_between: {
                                    label: formatMessage(
                                        MESSAGES.countNotBetween,
                                    ),
                                },
                            },
                        },
                    },
                },
            },
            settings: {
                ...MaterialConfig.settings,
                valueSourcesInfo: {
                    ...MaterialConfig.settings.valueSourcesInfo,
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
                    ...MaterialConfig.settings.locale,
                    moment: moment.locale(),
                },
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
        [formatMessage],
    );
};
