import { defineMessages } from 'react-intl';

const MESSAGES = defineMessages({
    // CONJONCTIONS
    and: {
        id: 'blsq.queryBuilder.and',
        defaultMessage: 'And',
    },
    or: {
        id: 'blsq.queryBuilder.or',
        defaultMessage: 'Or',
    },
    // OPERATORS
    contains: {
        id: 'blsq.queryBuilder.contains',
        defaultMessage: 'Contains',
    },
    notLike: {
        id: 'blsq.queryBuilder.notLike',
        defaultMessage: 'Not contains',
    },
    startsWith: {
        id: 'blsq.queryBuilder.startsWith',
        defaultMessage: 'Starts with',
    },
    endsWith: {
        id: 'blsq.queryBuilder.endsWith',
        defaultMessage: 'Ends with',
    },
    between: {
        id: 'blsq.queryBuilder.between',
        defaultMessage: 'Between',
    },
    notBetween: {
        id: 'blsq.queryBuilder.notBetween',
        defaultMessage: 'Not between',
    },
    isEmpty: {
        id: 'blsq.queryBuilder.isEmpty',
        defaultMessage: 'Is empty',
    },
    isNotEmpty: {
        id: 'blsq.queryBuilder.isNotEmpty',
        defaultMessage: 'Is not empty',
    },
    isNull: {
        id: 'blsq.queryBuilder.isNull',
        defaultMessage: 'Is null',
    },
    isNotNull: {
        id: 'blsq.queryBuilder.isNotNull',
        defaultMessage: 'Is not null',
    },
    anyIn: {
        id: 'blsq.queryBuilder.anyIn',
        defaultMessage: 'Any in',
    },
    notAnyIn: {
        id: 'blsq.queryBuilder.notAnyIn',
        defaultMessage: 'Not in',
    },
    equals: {
        id: 'blsq.queryBuilder.equals',
        defaultMessage: 'Equals',
    },
    notEquals: {
        id: 'blsq.queryBuilder.notEquals',
        defaultMessage: 'Not equals',
    },
    proximity: {
        id: 'blsq.queryBuilder.proximity',
        defaultMessage: 'Proximity search',
    },
    proximityValueLabel1: {
        id: 'blsq.queryBuilder.proximityValueLabel1',
        defaultMessage: 'Word 1',
    },
    proximityValuePLaceholder1: {
        id: 'blsq.queryBuilder.proximityValuePLaceholder1',
        defaultMessage: 'Enter first word',
    },
    proximityValueLabel2: {
        id: 'blsq.queryBuilder.proximityValueLabel2',
        defaultMessage: 'Word 2',
    },
    proximityValuePLaceholder2: {
        id: 'blsq.queryBuilder.proximityValuePLaceholder2',
        defaultMessage: 'Enter second word',
    },
    proximityOptionsLabel: {
        id: 'blsq.queryBuilder.proximityOptionsLabel',
        defaultMessage: 'Near',
    },
    proximityOptionsPlaceholder: {
        id: 'blsq.queryBuilder.proximityOptionsPlaceholder',
        defaultMessage: 'Select words between',
    },
    some: {
        id: 'blsq.queryBuilder.some',
        defaultMessage: 'Some',
    },
    all: {
        id: 'blsq.queryBuilder.all',
        defaultMessage: 'All',
    },
    none: {
        id: 'blsq.queryBuilder.none',
        defaultMessage: 'None',
    },
    // WIDGETS
    textLabel: {
        id: 'blsq.queryBuilder.textLabel',
        defaultMessage: 'String',
    },
    textPlaceholder: {
        id: 'blsq.queryBuilder.textPlaceholder',
        defaultMessage: 'Enter string',
    },
    texareaLabel: {
        id: 'blsq.queryBuilder.texareaLabel',
        defaultMessage: 'Text',
    },
    textareaPlaceholder: {
        id: 'blsq.queryBuilder.textareaPlaceholder',
        defaultMessage: 'Enter text',
    },
    numberLabel: {
        id: 'blsq.queryBuilder.numberLabel',
        defaultMessage: 'Number',
    },
    numberPlaceholder: {
        id: 'blsq.queryBuilder.numberPlaceholder',
        defaultMessage: 'Enter number',
    },
    numberFromLabel: {
        id: 'blsq.queryBuilder.numberFromLabel',
        defaultMessage: 'Number from',
    },
    numberFromPlaceholder: {
        id: 'blsq.queryBuilder.numberFromPlaceholder',
        defaultMessage: 'Enter number from',
    },
    numberToLabel: {
        id: 'blsq.queryBuilder.numberToLabel',
        defaultMessage: 'Number to',
    },
    numberToPlaceholder: {
        id: 'blsq.queryBuilder.numberToPlaceholder',
        defaultMessage: 'Enter number to',
    },
    sliderPlaceholder: {
        id: 'blsq.queryBuilder.sliderPlaceholder',
        defaultMessage: 'Enter number or move slider',
    },
    date: {
        id: 'blsq.queryBuilder.date',
        defaultMessage: 'Date',
    },
    datePlaceholder: {
        id: 'blsq.queryBuilder.datePlaceholder',
        defaultMessage: 'Enter date',
    },
    dateFrom: {
        id: 'blsq.queryBuilder.dateFrom',
        defaultMessage: 'Date from',
    },
    dateFromPlaceholder: {
        id: 'blsq.queryBuilder.dateFromPlaceholder',
        defaultMessage: 'Enter date from',
    },
    dateTo: {
        id: 'blsq.queryBuilder.dateTo',
        defaultMessage: 'Date to',
    },
    dateToPlaceholder: {
        id: 'blsq.queryBuilder.dateToPlaceholder',
        defaultMessage: 'Enter date to',
    },
    time: {
        id: 'blsq.queryBuilder.time',
        defaultMessage: 'Time',
    },
    timePlaceholder: {
        id: 'blsq.queryBuilder.timePlaceholder',
        defaultMessage: 'Enter time',
    },
    timeFrom: {
        id: 'blsq.queryBuilder.timeFrom',
        defaultMessage: 'Time from',
    },
    timeFromPlaceholder: {
        id: 'blsq.queryBuilder.timeFromPlaceholder',
        defaultMessage: 'Enter time from',
    },
    timeTo: {
        id: 'blsq.queryBuilder.timeTo',
        defaultMessage: 'Time to',
    },
    timeToPlaceholder: {
        id: 'blsq.queryBuilder.timeToPlaceholder',
        defaultMessage: 'Enter time to',
    },
    datetime: {
        id: 'blsq.queryBuilder.datetime',
        defaultMessage: 'Datetime',
    },
    datetimePlaceholder: {
        id: 'blsq.queryBuilder.datetimePlaceholder',
        defaultMessage: 'Enter datetime',
    },
    datetimeFrom: {
        id: 'blsq.queryBuilder.datetimeFrom',
        defaultMessage: 'Datetime from',
    },
    datetimeFromPlaceholder: {
        id: 'blsq.queryBuilder.datetimeFromPlaceholder',
        defaultMessage: 'Enter datetime from',
    },
    datetimeTo: {
        id: 'blsq.queryBuilder.datetimeTo',
        defaultMessage: 'Datetime to',
    },
    datetimeToPlaceholder: {
        id: 'blsq.queryBuilder.datetimeToPlaceholder',
        defaultMessage: 'Enter datetime to',
    },
    yes: {
        id: 'blsq.queryBuilder.yes',
        defaultMessage: 'Yes',
    },
    no: {
        id: 'blsq.queryBuilder.no',
        defaultMessage: 'No',
    },
    fieldCompare: {
        id: 'blsq.queryBuilder.fieldCompare',
        defaultMessage: 'Field to compare',
    },
    fieldPlaceholder: {
        id: 'blsq.queryBuilder.fieldPlaceholder',
        defaultMessage: 'Select field to compare',
    },
    range: {
        id: 'blsq.queryBuilder.range',
        defaultMessage: 'Range',
    },
    rangePlaceholder: {
        id: 'blsq.queryBuilder.rangePlaceholder',
        defaultMessage: 'Select range',
    },
    rangeFrom: {
        id: 'blsq.queryBuilder.rangeFrom',
        defaultMessage: 'Number from',
    },
    rangeFromPlaceholder: {
        id: 'blsq.queryBuilder.rangeFromPlaceholder',
        defaultMessage: 'Enter number from',
    },
    rangeTo: {
        id: 'blsq.queryBuilder.rangeTo',
        defaultMessage: 'Number to',
    },
    rangeToPlaceholder: {
        id: 'blsq.queryBuilder.rangeToPlaceholder',
        defaultMessage: 'Enter number to',
    },
    // TYPES
    countEqual: {
        id: 'blsq.queryBuilder.countEqual',
        defaultMessage: 'Count ==',
    },
    countNotEqual: {
        id: 'blsq.queryBuilder.countNotEqual',
        defaultMessage: 'Count !=',
    },
    countLess: {
        id: 'blsq.queryBuilder.countLess',
        defaultMessage: 'Count <',
    },
    countLessOrEqual: {
        id: 'blsq.queryBuilder.countLessOrEqual',
        defaultMessage: 'Count <=',
    },
    countGreater: {
        id: 'blsq.queryBuilder.countGreater',
        defaultMessage: 'Count >',
    },
    countGreaterOrEqual: {
        id: 'blsq.queryBuilder.countGreaterOrEqual',
        defaultMessage: 'Count >=',
    },
    countBetween: {
        id: 'blsq.queryBuilder.countBetween',
        defaultMessage: 'Count between',
    },
    countNotBetween: {
        id: 'blsq.queryBuilder.countNotBetween',
        defaultMessage: 'Count not between',
    },
    selectValue: {
        id: 'blsq.queryBuilder.selectValue',
        defaultMessage: 'Select value',
    },
    values: {
        id: 'blsq.queryBuilder.values',
        defaultMessage: 'Values',
    },
    selectValues: {
        id: 'blsq.queryBuilder.selectValues',
        defaultMessage: 'Select values',
    },
    // SETTINGS
    value: {
        id: 'blsq.queryBuilder.value',
        defaultMessage: 'Value',
    },
    field: {
        id: 'blsq.queryBuilder.field',
        defaultMessage: 'Field',
    },
    function: {
        id: 'blsq.queryBuilder.function',
        defaultMessage: 'Function',
    },
    operator: {
        id: 'blsq.queryBuilder.operator',
        defaultMessage: 'Operator',
    },
    selectField: {
        id: 'blsq.queryBuilder.selectField',
        defaultMessage: 'Select field',
    },
    selectFunction: {
        id: 'blsq.queryBuilder.selectFunction',
        defaultMessage: 'Select function',
    },
    selectOperator: {
        id: 'blsq.queryBuilder.selectOperator',
        defaultMessage: 'Select operator',
    },
    lock: {
        id: 'blsq.queryBuilder.lock',
        defaultMessage: 'Lock',
    },
    locked: {
        id: 'blsq.queryBuilder.locked',
        defaultMessage: 'Locked',
    },
    addGroup: {
        id: 'blsq.queryBuilder.addGroup',
        defaultMessage: 'Add group',
    },
    addCondition: {
        id: 'blsq.queryBuilder.addCondition',
        defaultMessage: 'Add condition',
    },
    addDefaultCase: {
        id: 'blsq.queryBuilder.addDefaultCase',
        defaultMessage: 'Add default condition',
    },
    defaultCase: {
        id: 'blsq.queryBuilder.defaultCase',
        defaultMessage: 'Default:',
    },
    addRule: {
        id: 'blsq.queryBuilder.addRule',
        defaultMessage: 'Add rule',
    },
    addSubRule: {
        id: 'blsq.queryBuilder.addSubRule',
        defaultMessage: 'Add sub rule',
    },
    not: {
        id: 'blsq.queryBuilder.not',
        defaultMessage: 'Not',
    },
    valueSourcesPopupTitle: {
        id: 'blsq.queryBuilder.valueSourcesPopupTitle',
        defaultMessage: 'Select value source',
    },
    cancel: {
        id: 'blsq.queryBuilder.cancel',
        defaultMessage: 'Cancel',
    },
    confirm: {
        id: 'blsq.queryBuilder.confirm',
        defaultMessage: 'Confirm',
    },
    // TABS
    queryTab: {
        id: 'blsq.queryBuilder.confqueryTabirm',
        defaultMessage: 'Query',
    },
    jsonTab: {
        id: 'blsq.queryBuilder.jsonTab',
        defaultMessage: 'Json',
    },
    // OTHER
    apply: {
        id: 'blsq.queryBuilder.apply',
        defaultMessage: 'Apply',
    },
});

export { MESSAGES };
