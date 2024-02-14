import React, { ReactNode } from 'react';
import { JsonLogicTree, Fields } from '@react-awesome-query-builder/mui';
import { IntlMessage } from '../../../types/types';
declare const modalWithButton: React.FunctionComponent<{
    onChange: (logic?: JsonLogicTree) => void;
    label: IntlMessage;
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
