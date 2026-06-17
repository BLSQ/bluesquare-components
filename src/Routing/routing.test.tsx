import React from 'react';
import { renderHook } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ExternalLink } from './ExternalLink';
import { LinkButton } from './LinkButton';
import { LinkWithLocation } from './LinkWithLocation';
import { useGoBack, useRedirectTo } from './redirections';
import { useParamsObject } from './useParamsObject';
import { renderWithProviders } from '../tests/helpers';

const routerWrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={['/page/2/order/name']}>
        <Routes>
            <Route path="*" element={<>{children}</>} />
        </Routes>
    </MemoryRouter>
);

describe('routing', () => {
    it('parses path params with useParamsObject', () => {
        const { result } = renderHook(
            () =>
                useParamsObject('forms', {
                    forms: ['page', 'order'],
                }),
            { wrapper: routerWrapper },
        );

        expect(result.current).toEqual({
            page: '2',
            order: 'name',
        });
    });

    it('exposes redirect helpers inside a router', () => {
        const { result } = renderHook(
            () => ({
                redirect: useRedirectTo(),
                goBack: useGoBack(),
            }),
            { wrapper: routerWrapper },
        );

        expect(typeof result.current.redirect).toBe('function');
        expect(typeof result.current.goBack).toBe('function');
    });

    it('renders ExternalLink', () => {
        const { getByText } = renderWithProviders(
            <ExternalLink url="https://example.com">Example</ExternalLink>,
        );
        expect(getByText('Example').closest('a')).toHaveAttribute(
            'href',
            'https://example.com',
        );
    });

    it('renders LinkButton', () => {
        const { getByRole } = renderWithProviders(
            <LinkButton url="/forms">Forms</LinkButton>,
        );
        expect(getByRole('link', { name: 'Forms' })).toBeInTheDocument();
    });

    it('renders LinkWithLocation', () => {
        const { getByRole } = renderWithProviders(
            <LinkWithLocation to="/forms">Forms</LinkWithLocation>,
        );
        expect(getByRole('link', { name: 'Forms' })).toBeInTheDocument();
    });
});
