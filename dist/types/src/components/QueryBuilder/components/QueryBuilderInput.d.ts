import React from 'react';
import { JsonLogicTree, Fields } from 'react-awesome-query-builder';
import { IntlMessage } from '../../../types/types';
declare const modalWithButton: React.FunctionComponent<{
    id?: string | undefined;
    dataTestId?: string | undefined;
    label: IntlMessage;
    onChange: (logic?: Object | undefined) => void;
    initialLogic?: Object | undefined;
    fields: Fields;
} & {
    defaultOpen?: boolean | undefined;
    iconProps: {
        dataTestId?: string | undefined;
        label: IntlMessage;
        value: string;
        onClear: () => void;
    };
}>;
export { modalWithButton as QueryBuilderInput };
