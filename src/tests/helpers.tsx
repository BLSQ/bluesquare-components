import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { render, RenderOptions } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

import { SidebarProvider } from '../contexts/SideBarContext/SideBarContext';
import { english, french } from '../locale';
import { LocalizationProvider } from '../localization/LocalizationProvider/LocalizationProvider';
import { LocaleProvider } from '../localization/useLocale';
import { theme } from '../styles/iaso/theme';

const createTestQueryClient = (): QueryClient =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

type ProviderOptions = {
    route?: string;
    withSidebar?: boolean;
};

function TestProviders({
    children,
    route = '/',
    withSidebar = false,
}: {
    children: React.ReactNode;
    route?: string;
    withSidebar?: boolean;
}) {
    const queryClient = createTestQueryClient();
    const content = (
        <LocaleProvider>
            <LocalizationProvider en={english} fr={french}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <StylesProvider injectFirst>
                            <CssBaseline />
                            <SnackbarProvider maxSnack={3}>
                                {children}
                            </SnackbarProvider>
                        </StylesProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </LocalizationProvider>
        </LocaleProvider>
    );

    return (
        <MemoryRouter initialEntries={[route]}>
            {withSidebar ? (
                <SidebarProvider>{content}</SidebarProvider>
            ) : (
                content
            )}
        </MemoryRouter>
    );
}

export function TestWrapper({
    children,
    route = '/',
    withSidebar = false,
}: {
    children: React.ReactNode;
    route?: string;
    withSidebar?: boolean;
}) {
    return (
        <TestProviders route={route} withSidebar={withSidebar}>
            {children}
        </TestProviders>
    );
}

export function renderWithProviders(
    ui: React.ReactElement,
    options?: RenderOptions & ProviderOptions,
) {
    const { route, withSidebar, ...renderOptions } = options ?? {};

    return render(ui, {
        wrapper: ({ children }) => (
            <TestProviders route={route} withSidebar={withSidebar}>
                {children}
            </TestProviders>
        ),
        ...renderOptions,
    });
}
