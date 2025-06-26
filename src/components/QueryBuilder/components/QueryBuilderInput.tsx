import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Tabs, Tab, Box, useTheme } from '@mui/material';
import {
    JsonLogicTree,
    JsonLogicResult,
    Fields,
} from '@react-awesome-query-builder/mui';

import { useSafeIntl } from '../../../utils/useSafeIntl';

import { ConfirmCancelModal } from '../../Modal/ConfirmCancelModal';
import { makeFullModal } from '../../Modal/ModalWithButton';
import { QueryBuilder } from './QueryBuilder';
import { TriggerModal } from './TriggerModal';
import { JsonLogicEditor } from './JsonLogicEditor';

import { IntlMessage } from '../../../types/types';
import { MESSAGES } from '../messages';
import { MuiWidth } from '../../Modal/SimpleModal';

type Props = {
    label: IntlMessage;
    isOpen: boolean;
    id?: string;
    dataTestId?: string;
    closeDialog: () => void;
    initialLogic?: JsonLogicTree;
    fields: Fields;
    // eslint-disable-next-line no-unused-vars
    onChange: (logic?: JsonLogicTree) => void;
    InfoPopper?: ReactNode;
    maxWidth?: MuiWidth;
    onLogicUpdate?: (logic: JsonLogicTree) => void;
};

const QueryBuilderInput: FunctionComponent<Props> = ({
    label,
    closeDialog,
    isOpen,
    id,
    dataTestId,
    initialLogic,
    fields,
    onChange,
    InfoPopper,
    maxWidth = 'lg',
    onLogicUpdate,
}) => {
    const { formatMessage } = useSafeIntl();
    const theme = useTheme();
    const [logic, setLogic] = useState<JsonLogicTree | undefined>(initialLogic);
    const [tab, setTab] = useState<string>('query');
    const handleChangeLogic = (result: JsonLogicResult) => {
        setLogic(result?.logic);
        onLogicUpdate?.(result?.logic as JsonLogicTree);
    };
    const handleConfirm = () => {
        closeDialog();
        onChange(logic);
    };
    const handleChangeTab = (newTab: string) => {
        setTab(newTab);
    };
    return (
        <ConfirmCancelModal
            allowConfirm
            titleMessage={label}
            onConfirm={handleConfirm}
            onCancel={() => {
                closeDialog();
            }}
            maxWidth={maxWidth}
            cancelMessage={MESSAGES.cancel}
            confirmMessage={MESSAGES.confirm}
            open={isOpen}
            closeDialog={closeDialog}
            dataTestId={dataTestId || ''}
            id={id || ''}
            onClose={() => null}
        >
            <Box position="relative">
                {/* allow to display an popper with informations about the fields used */}
                {InfoPopper && (
                    <Box
                        position="absolute"
                        top={theme.spacing(-7)}
                        right={theme.spacing(-3)}
                    >
                        {InfoPopper}
                    </Box>
                )}
                <Tabs
                    value={tab}
                    onChange={(_, newtab) => handleChangeTab(newtab)}
                >
                    <Tab
                        value="query"
                        label={formatMessage(MESSAGES.queryTab)}
                    />
                    <Tab value="json" label={formatMessage(MESSAGES.jsonTab)} />
                </Tabs>
                {tab === 'query' && (
                    <Box mt={2}>
                        <QueryBuilder
                            logic={logic}
                            fields={fields}
                            onChange={handleChangeLogic}
                        />
                    </Box>
                )}
                {tab === 'json' && (
                    <JsonLogicEditor
                        initialLogic={logic}
                        changeLogic={newLogic => setLogic(newLogic)}
                    />
                )}
            </Box>
        </ConfirmCancelModal>
    );
};
const modalWithButton = makeFullModal(QueryBuilderInput, TriggerModal);

export { modalWithButton as QueryBuilderInput };
