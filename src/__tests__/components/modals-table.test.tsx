import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

import { AddButton } from '../../components/buttons/AddButton';
import { AlertModal } from '../../components/Modal/AlertModal/AlertModal';
import { BackdropClickModal } from '../../components/Modal/BackdropClickModal/BackdropClickModal';
import { ConfirmCancelButtons } from '../../components/Modal/ConfirmCancelButtons';
import { ConfirmCancelModal } from '../../components/Modal/ConfirmCancelModal';
import { makeFullModal } from '../../components/Modal/ModalWithButton';
import { SimpleModal } from '../../components/Modal/SimpleModal';
import { ColumnsSelectDrawer } from '../../components/table/ColumnsSelectDrawer';
import { HeaderRowIcon } from '../../components/table/HeaderRowIcon';
import { InfoHeader } from '../../components/table/InfoHeader';
import { SelectionSpeedDials } from '../../components/table/SelectionSpeedDials';
import { Table } from '../../components/table/Table';
import { Expander } from '../../components/table/Table/Expander';
import { PageRowSelect } from '../../components/table/Table/PageRowSelect';
import { Pagination } from '../../components/table/Table/Pagination';
import { intlMsg, noop, tableColumns, tableData } from '../../tests/fixtures';
import { renderWithProviders } from '../../tests/helpers';

const CloseButtons = ({ closeDialog }: { closeDialog: () => void }) => (
    <button type="button" onClick={closeDialog}>
        Close
    </button>
);

const ModalWithButton = makeFullModal(SimpleModal, AddButton);

describe('modals and table', () => {
    it('renders AlertModal', () => {
        const { getByText } = renderWithProviders(
            <AlertModal isOpen closeDialog={noop} titleMessage="Alert">
                <span>alert content</span>
            </AlertModal>,
        );
        expect(getByText('alert content')).toBeInTheDocument();
    });

    it('renders SimpleModal', () => {
        const { getByText } = renderWithProviders(
            <SimpleModal
                open
                onClose={noop}
                id="simple-modal"
                dataTestId="simple-modal"
                titleMessage="Simple"
                closeDialog={noop}
                buttons={CloseButtons}
            >
                <span>simple content</span>
            </SimpleModal>,
        );
        expect(getByText('simple content')).toBeInTheDocument();
    });

    it('renders ConfirmCancelModal', () => {
        const { getByText } = renderWithProviders(
            <ConfirmCancelModal
                open
                onClose={noop}
                id="confirm-modal"
                dataTestId="confirm-modal"
                titleMessage="Confirm"
                closeDialog={noop}
                onConfirm={noop}
                onCancel={noop}
                confirmMessage={intlMsg('test.confirm', 'Confirm')}
                cancelMessage={intlMsg('test.cancel', 'Cancel')}
            >
                <span>confirm content</span>
            </ConfirmCancelModal>,
        );
        expect(getByText('confirm content')).toBeInTheDocument();
    });

    it('renders ConfirmCancelButtons', () => {
        const { getByText } = renderWithProviders(
            <ConfirmCancelButtons
                closeDialog={noop}
                onConfirm={noop}
                onCancel={noop}
                confirmMessage={intlMsg('test.confirm', 'Confirm')}
                cancelMessage={intlMsg('test.cancel', 'Cancel')}
            />,
        );
        expect(getByText('Confirm')).toBeInTheDocument();
    });

    it('renders BackdropClickModal', () => {
        const { getByRole } = renderWithProviders(
            <BackdropClickModal open closeDialog={noop} onConfirm={noop} />,
        );
        expect(getByRole('dialog')).toBeInTheDocument();
    });

    it('renders makeFullModal with SimpleModal and AddButton', () => {
        const { getByRole } = renderWithProviders(
            <ModalWithButton
                onClose={noop}
                id="full-modal"
                dataTestId="full-modal"
                titleMessage="Full modal"
                buttons={CloseButtons}
            >
                <span>full modal content</span>
            </ModalWithButton>,
        );
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('renders Table', () => {
        const { container } = renderWithProviders(
            <Table columns={tableColumns} data={tableData} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders Pagination', () => {
        const { container } = renderWithProviders(
            <Pagination
                count={0}
                rowsPerPage={10}
                pageIndex={0}
                pages={1}
                countOnTop={false}
                selectCount={0}
                onTableParamsChange={noop}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders Expander', () => {
        const { container } = renderWithProviders(<Expander />);
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders ColumnsSelectDrawer', () => {
        const { container } = renderWithProviders(
            <ColumnsSelectDrawer
                options={[{ key: 'name', label: 'Name', show: true }]}
                setOptions={noop}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders HeaderRowIcon', () => {
        const { container } = renderWithProviders(
            <HeaderRowIcon title="Info" IconComponent={InfoIcon} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders InfoHeader', () => {
        const { getByText } = renderWithProviders(
            <InfoHeader message="Details">
                <span>header</span>
            </InfoHeader>,
        );
        expect(getByText('header')).toBeInTheDocument();
    });

    it('renders SelectionSpeedDials', () => {
        const { container } = renderWithProviders(
            <SelectionSpeedDials selection={{}} actionMessage="Actions" />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders PageRowSelect', () => {
        const { container } = renderWithProviders(
            <PageRowSelect
                rowsPerPage={10}
                rowsPerPageOptions={[10, 20]}
                selectRowsPerPage={noop}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });
});
