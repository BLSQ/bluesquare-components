import React from 'react';
import { JsonLogicTree, Fields } from '@react-awesome-query-builder/mui';
import { IntlMessage } from '../../../types/types';
declare const modalWithButton: React.FunctionComponent<{
    label: IntlMessage;
    id?: string | undefined;
    onChange: (logic?: JsonLogicTree) => void;
    dataTestId?: string | undefined;
    fields: Fields;
    initialLogic?: JsonLogicTree | undefined;
    InfoPopper?: React.ReactNode;
} & {
    defaultOpen?: boolean;
    iconProps: {
        label: IntlMessage;
        value: string;
        dataTestId?: string | undefined;
        onClear: () => void;
    };
}>;
export { modalWithButton as QueryBuilderInput };
