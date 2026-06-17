import React from 'react';

import { BlockPlaceholder } from '../../components/BlockPlaceholder';
import { DatePicker } from '../../components/DatePicker';
import { DndSelect } from '../../components/DndSelect';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { ErrorBoundaryWithMessage } from '../../components/ErrorBoundary/ErrorBoundaryWithMessage';
import { ExpandableItem } from '../../components/ExpandableItem/ExpandableItem';
import { FormattedNumber } from '../../components/Formatted/FormattedNumber';
import { LazyImage } from '../../components/LazyProgressiveImage';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { PageError } from '../../components/PageError/PageError';
import { noop } from '../../tests/fixtures';
import { renderWithProviders } from '../../tests/helpers';

describe('misc components', () => {
    it('renders BlockPlaceholder', () => {
        const { container } = renderWithProviders(<BlockPlaceholder />);
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders LoadingSpinner', () => {
        const { container } = renderWithProviders(<LoadingSpinner />);
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders ErrorBoundary children', () => {
        const { getByText } = renderWithProviders(
            <ErrorBoundary>
                <span>safe</span>
            </ErrorBoundary>,
        );
        expect(getByText('safe')).toBeInTheDocument();
    });

    it('renders ErrorBoundaryWithMessage', () => {
        const { getByText } = renderWithProviders(
            <ErrorBoundaryWithMessage>
                <span>safe</span>
            </ErrorBoundaryWithMessage>,
        );
        expect(getByText('safe')).toBeInTheDocument();
    });

    it('renders PageError', () => {
        const { container } = renderWithProviders(
            <PageError errorCode="404" iconColor="#999" />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders FormattedNumber', () => {
        const { getByText } = renderWithProviders(
            <FormattedNumber value={1234} />,
        );
        expect(getByText('1,234')).toBeInTheDocument();
    });

    it('renders ExpandableItem', () => {
        const { getByText } = renderWithProviders(
            <ExpandableItem label="Section" openOnMount>
                <span>content</span>
            </ExpandableItem>,
        );
        expect(getByText('content')).toBeInTheDocument();
    });

    it('renders DatePicker', () => {
        const { container } = renderWithProviders(
            <DatePicker label="Date" onChange={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders DndSelect', () => {
        const { container } = renderWithProviders(
            <DndSelect
                options={[{ label: 'One', value: '1' }]}
                value={[]}
                onChange={noop}
                label="Select"
                keyValue="select"
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders LazyImage', () => {
        const { getByAltText } = renderWithProviders(
            <LazyImage src="https://example.com/image.png">
                {(image, loading) => (
                    <img src={image} alt="example" data-loading={loading} />
                )}
            </LazyImage>,
        );
        expect(getByAltText('example')).toBeInTheDocument();
    });
});
