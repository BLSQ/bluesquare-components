import React from 'react';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { makeApiHooks } from '../../api/apiHooks';
import { useSidebar } from '../../contexts/SideBarContext/SideBarContext';
import { injectIntl } from '../../localization/injectIntl';
import { useSafeIntl } from '../../localization/useSafeIntl';
import { EventDispatcher } from '../../snackbars/EventDispatcher';
import SnackBarButton from '../../snackbars/SnackBarButton';
import SnackBarErrorMessage from '../../snackbars/SnackBarErrorMessage';
import { noop } from '../../tests/fixtures';
import { renderWithProviders } from '../../tests/helpers';

describe('localization, api, and snackbar utilities', () => {
    it('renders useSafeIntl inside LocalizationProvider and LocaleProvider', () => {
        const IntlConsumer = () => {
            const { formatMessage } = useSafeIntl();
            return (
                <span>
                    {formatMessage({
                        id: 'test.hello',
                        defaultMessage: 'Hello',
                    })}
                </span>
            );
        };

        renderWithProviders(<IntlConsumer />);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    it('makeApiHooks returns snackbar query hooks', () => {
        const dispatcher = new EventDispatcher();
        const hooks = makeApiHooks(dispatcher);

        expect(hooks).toHaveProperty('useSnackQuery');
        expect(hooks).toHaveProperty('useSnackMutation');
        expect(hooks).toHaveProperty('useSnackQueries');
        expect(hooks).toHaveProperty('useAbortController');
        expect(typeof hooks.useSnackQuery).toBe('function');
    });

    it('EventDispatcher dispatches events to listeners', () => {
        const dispatcher = new EventDispatcher();
        const callback = vi.fn();

        dispatcher.addEventListener('snackbar', callback);
        dispatcher.dispatch('snackbar', { message: 'Saved' });

        expect(callback).toHaveBeenCalledWith({ message: 'Saved' });
    });

    it('renders SnackBarButton', () => {
        const { getByRole } = renderWithProviders(
            <SnackBarButton messageKey="close" onClick={noop} />,
        );
        expect(getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('renders SnackBarErrorMessage', () => {
        const { getByRole } = renderWithProviders(
            <SnackBarErrorMessage errorLog="Something went wrong" />,
        );
        expect(
            getByRole('button', { name: 'Copy error' }),
        ).toBeInTheDocument();
    });

    it('useSidebar works with SidebarProvider', () => {
        const SidebarConsumer = () => {
            const { isOpen } = useSidebar();
            return <span>{isOpen ? 'open' : 'closed'}</span>;
        };

        renderWithProviders(<SidebarConsumer />, { withSidebar: true });
        expect(screen.getByText('closed')).toBeInTheDocument();
    });

    it('injectIntl wraps a component with intl', () => {
        const BaseComponent = ({
            intl,
        }: {
            intl: { formatMessage: (msg: {
                id: string;
                defaultMessage: string;
            }) => string };
        }) => (
            <span>
                {intl.formatMessage({
                    id: 'test.wrapped',
                    defaultMessage: 'Wrapped',
                })}
            </span>
        );

        const WrappedComponent = injectIntl(BaseComponent);
        renderWithProviders(<WrappedComponent />);
        expect(screen.getByText('Wrapped')).toBeInTheDocument();
    });
});
