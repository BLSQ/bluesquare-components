import React, { FunctionComponent, useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import {
    JsonLogicTree,
    JsonLogicResult,
    Fields,
} from 'react-awesome-query-builder';

import { useSafeIntl } from '../../../utils/useSafeIntl';

import { ConfirmCancelModal } from '../../Modal/ConfirmCancelModal';
import { makeFullModal } from '../../Modal/ModalWithButton';
import { QueryBuilder } from './QueryBuilder';
import { TriggerModal } from './TriggerModal';
import { JsonLogicEditor } from './JsonLogicEditor';

import { IntlMessage } from '../../../types/types';
import { MESSAGES } from '../messages';

type Props = {
    label: IntlMessage;
    isOpen: boolean;
    id?: string;
    dataTestId?: string;
    closeDialog: () => void;
    initialLogic?: JsonLogicTree;
    fields: Fields;
    // eslint-disable-next-line no-unused-vars
    onChange: (logic: JsonLogicTree | undefined) => void;
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
}) => {
    const { formatMessage } = useSafeIntl();
    const [logic, setLogic] = useState<JsonLogicTree | undefined>(initialLogic);
    const [tab, setTab] = useState<string>('query');
    const handleChangeLogic = (result: JsonLogicResult) => {
        setLogic(result?.logic);
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
            maxWidth="md"
            cancelMessage={MESSAGES.cancel}
            confirmMessage={MESSAGES.confirm}
            open={isOpen}
            closeDialog={closeDialog}
            dataTestId={dataTestId || ''}
            id={id || ''}
            onClose={() => null}
        >
            <Tabs value={tab} onChange={(_, newtab) => handleChangeTab(newtab)}>
                <Tab value="query" label={formatMessage(MESSAGES.queryTab)} />
                <Tab value="json" label={formatMessage(MESSAGES.jsonTab)} />
            </Tabs>
            {tab === 'query' && (
                <Box ml={-4} mr={-4}>
                    <QueryBuilder
                        logic={logic || {}}
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
        </ConfirmCancelModal>
    );
};
const modalWithButton = makeFullModal(QueryBuilderInput, TriggerModal);

export { modalWithButton as QueryBuilderInput };
