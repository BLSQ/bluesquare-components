import React, { ReactNode } from 'react';
import { JsonLogicTree, Fields } from 'react-awesome-query-builder';
import { IntlMessage } from '../../../types/types';
declare const modalWithButton: React.FunctionComponent<{
    label: IntlMessage;
    onChange: (logic?: Object | undefined) => void;
    id?: string | undefined;
    dataTestId?: string | undefined;
    initialLogic?: Object | undefined;
    fields: Fields;
    InfoPopper?: ReactNode;
} & {
    defaultOpen?: boolean | undefined;
    iconProps: {
        label: IntlMessage;
        value: string;
        dataTestId?: string | undefined;
        onClear: () => void;
    };
}>;
export { modalWithButton as QueryBuilderInput };
