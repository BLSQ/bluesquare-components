import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { makeApiHooks } from '../../api/apiHooks';
import { useSidebar } from '../../contexts/SideBarContext/SideBarContext';
import { english, french } from '../../locale';
import { injectIntl } from '../../localization/injectIntl';
import { LocalizationProvider } from '../../localization/LocalizationProvider/LocalizationProvider';
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

    it('renders LocalizationProvider children', () => {
        renderWithProviders(
            <LocalizationProvider en={english} fr={french}>
                <span>Localized child</span>
            </LocalizationProvider>,
        );
        expect(screen.getByText('Localized child')).toBeInTheDocument();
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
        expect(getByRole('button', { name: 'Copy error' })).toBeInTheDocument();
    });

    it('useSidebar works with SidebarProvider', () => {
        const SidebarConsumer = () => {
            const { isOpen } = useSidebar();
            return <span>{isOpen ? 'open' : 'closed'}</span>;
        };

        renderWithProviders(<SidebarConsumer />, { withSidebar: true });
        expect(screen.getByText('closed')).toBeInTheDocument();
    });

    it('useSidebar toggles sidebar state', async () => {
        const user = userEvent.setup();
        const SidebarConsumer = () => {
            const { isOpen, toggleSidebar } = useSidebar();
            return (
                <button type="button" onClick={toggleSidebar}>
                    {isOpen ? 'open' : 'closed'}
                </button>
            );
        };

        renderWithProviders(<SidebarConsumer />, { withSidebar: true });
        const button = screen.getByRole('button', { name: 'closed' });
        await user.click(button);
        expect(
            screen.getByRole('button', { name: 'open' }),
        ).toBeInTheDocument();
    });

    it('injectIntl wraps a component with intl', () => {
        const BaseComponent = ({
            intl,
        }: {
            intl: {
                formatMessage: (msg: {
                    id: string;
                    defaultMessage: string;
                }) => string;
            };
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
