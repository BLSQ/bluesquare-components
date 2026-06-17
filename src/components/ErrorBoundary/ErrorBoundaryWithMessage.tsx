import React from 'react';
import { useSafeIntl } from '../../localization/useSafeIntl';
import { ErrorBoundary } from '.';

export const ErrorBoundaryWithMessage = props => {
    const { formatMessage } = useSafeIntl();
    return (
        <ErrorBoundary message={formatMessage(props.message)}>
            {props.children}
        </ErrorBoundary>
    );
};
