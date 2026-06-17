import React from 'react';

import { AddButton } from '../../components/buttons/AddButton';
import { ExportButton } from '../../components/buttons/ExportButton';
import { IconButton } from '../../components/buttons/IconButton';
import { AddComment } from '../../components/comments/AddComment';
import { CommentWithThread } from '../../components/comments/CommentWithThread';
import { SingleComment } from '../../components/comments/SingleComment';
import { intlMsg, noop } from '../../tests/fixtures';
import { renderWithProviders } from '../../tests/helpers';

describe('buttons and comments', () => {
    it('renders AddButton', () => {
        const { getByRole } = renderWithProviders(
            <AddButton onClick={noop} />,
        );
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('renders ExportButton', () => {
        const { getByRole } = renderWithProviders(
            <ExportButton onClick={noop} batchExport />,
        );
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('renders IconButton', () => {
        const { getByRole } = renderWithProviders(
            <IconButton
                onClick={noop}
                icon="delete"
                tooltipMessage={intlMsg('test.delete', 'Delete')}
            />,
        );
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('renders AddComment', () => {
        const { container } = renderWithProviders(<AddComment />);
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders CommentWithThread', () => {
        const { getByText } = renderWithProviders(
            <CommentWithThread
                comments={[{ id: 1, author: 'Alice', comment: 'Hello' }]}
            />,
        );
        expect(getByText('Hello')).toBeInTheDocument();
    });

    it('renders SingleComment', () => {
        const { getByText } = renderWithProviders(
            <SingleComment author="Alice" content="Hello" />,
        );
        expect(getByText('Hello')).toBeInTheDocument();
    });
});
