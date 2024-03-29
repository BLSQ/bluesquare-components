import React from 'react';
import { ErrorBoundary } from '.';
import { useSafeIntl } from '../../utils/useSafeIntl';

export const ErrorBoundaryWithMessage = props => {
    const { formatMessage } = useSafeIntl();
    return (
        <ErrorBoundary message={formatMessage(props.message)}>
            {props.children}
        </ErrorBoundary>
    );
};
