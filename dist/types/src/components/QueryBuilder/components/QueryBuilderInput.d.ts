import React from 'react';
import { JsonLogicTree, Fields } from 'react-awesome-query-builder';
import { IntlMessage } from '../../../types/types';
declare const modalWithButton: React.FunctionComponent<{
    id?: string | undefined;
    dataTestId?: string | undefined;
    label: IntlMessage;
    onChange: (logic: JsonLogicTree | undefined) => void;
    initialLogic?: Object | undefined;
    fields: Fields;
} & {
    iconProps: {
        dataTestId?: string | undefined;
        label: IntlMessage;
        value: string;
    };
}>;
export { modalWithButton as QueryBuilderInput };
