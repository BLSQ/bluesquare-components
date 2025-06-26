import React from 'react';
import { JsonLogicTree, Fields } from '@react-awesome-query-builder/mui';
import { IntlMessage } from '../../../types/types';
import { MuiWidth } from '../../Modal/SimpleModal';
declare const modalWithButton: React.FunctionComponent<{
    maxWidth?: MuiWidth | undefined;
    label: IntlMessage;
    id?: string | undefined;
    onChange: (logic?: JsonLogicTree) => void;
    dataTestId?: string | undefined;
    fields: Fields;
    initialLogic?: JsonLogicTree | undefined;
    InfoPopper?: React.ReactNode;
    onLogicUpdate?: ((logic: JsonLogicTree) => void) | undefined;
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
