import React, { FunctionComponent } from 'react';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { FakeInput } from '../../inputs/FakeInput';

import { IntlMessage } from '../../../types/types';

type Props = {
    label: IntlMessage;
    value: string;
    onClick: () => void;
    dataTestId?: string;
    onClear: () => void;
};

export const TriggerModal: FunctionComponent<Props> = ({
    label,
    value,
    onClick,
    dataTestId,
    onClear,
}) => {
    const { formatMessage } = useSafeIntl();
    return (
        <FakeInput
            onClick={onClick}
            value={value}
            dataTestId={`open-query-builder-${dataTestId || 'default'}`}
            label={formatMessage(label) as string}
            onClear={onClear}
            fixedHeight={false}
        />
    );
};
