import React from 'react';
import { JsonLogicTree, Fields } from '@react-awesome-query-builder/mui';
import { IntlMessage } from '../../../types/types';
import { MuiWidth } from '../../Modal/SimpleModal';
declare const modalWithButton: React.FunctionComponent<{
    label: IntlMessage;
    id?: string | undefined;
    onChange: (logic?: JsonLogicTree) => void;
    maxWidth?: MuiWidth | undefined;
    dataTestId?: string | undefined;
    initialLogic?: JsonLogicTree | undefined;
    fields: Fields;
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
