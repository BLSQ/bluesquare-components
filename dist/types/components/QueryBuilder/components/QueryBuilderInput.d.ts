import React, { ReactNode } from 'react';
import { JsonLogicTree, Fields } from '@react-awesome-query-builder/mui';
import { IntlMessage } from '../../../types/types';
declare const modalWithButton: React.FunctionComponent<{
    id?: string | undefined;
    dataTestId?: string | undefined;
    label: IntlMessage;
    onChange: (logic?: JsonLogicTree) => void;
    initialLogic?: Object | undefined;
    fields: Fields;
    InfoPopper?: ReactNode;
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
