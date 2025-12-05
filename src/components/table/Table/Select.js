import Checkbox from '@mui/material/Checkbox';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { SelectionSpeedDials } from '../SelectionSpeedDials';
import { MESSAGES } from './messages';

import {
    defaultSelectionActions,
    selectionInitialState,
} from '../../../utils/tableUtils';

const onSelect = ({
    isSelected,
    item,
    selection,
    setTableSelection,
    count,
}) => {
    const selectedItems = [...selection.selectedItems];
    const unSelectedItems = [...selection.unSelectedItems];
    const { selectAll } = selection;
    if (selectAll) {
        if (!isSelected) {
            unSelectedItems.push(item);
        } else {
            const itemIndex = unSelectedItems.findIndex(el =>
                isEqual(el, item),
            );
            if (itemIndex !== -1) {
                unSelectedItems.splice(itemIndex, 1);
            }
        }
        setTableSelection('unselect', unSelectedItems, count);
    } else {
        if (isSelected) {
            selectedItems.push(item);
        } else {
            const itemIndex = selectedItems.findIndex(el => isEqual(el, item));
            selectedItems.splice(itemIndex, 1);
        }
        setTableSelection('select', selectedItems);
    }
};

const isItemSelected = (item, selection, selector = 'id') => {
    const { selectedItems, unSelectedItems, selectAll } = selection;
    if (!selectAll) {
        return Boolean(
            selectedItems.find(el => el[selector] === item[selector]),
        );
    }
    return !unSelectedItems.find(el => el[selector] === item[selector]);
};

const getSelectionCol = (
    selection,
    setTableSelection,
    count,
    formatMessage,
    getIsSelectionDisabled = row => false,
) => ({
    Header: formatMessage(MESSAGES.selection),
    accessor: 'selected',
    id: 'selectionColumn',
    width: 100,
    sortable: false,
    Cell: settings => {
        const handleSelect = useCallback(
            event => {
                onSelect({
                    isSelected: event.target.checked,
                    item: settings.cell.row.original,
                    selection,
                    setTableSelection,
                    count,
                });
            },
            [selection, setTableSelection, count, settings.cell.row.original],
        );
        const isDisabled = getIsSelectionDisabled(settings.cell.row.original);
        const isChecked = !isDisabled && isItemSelected(settings.cell.row.original, selection);
        return (
            <Checkbox
                color="primary"
                disabled={isDisabled}
                checked={isChecked}
                onChange={handleSelect}
            />
        );
    },
});

/**
 * @typedef {Object} SelectionObject
 * @property {Array} selectedItems
 * @property {Array} unSelectedItems
 * @property {boolean} selectAll
 * @property {number} selectCount
 */

/**
 * @param {Object} props
 * @param {boolean} [props.multiSelect]
 * @param {Array} [props.selectionActions]
 * @param {(selectionType: string, items: Array<any>, totalCount?: number) => any} [props.setTableSelection]
 * @param {SelectionObject|any} [props.selection]
 * @param {string|null} [props.selectionActionMessage]
 * @param {number} [props.selectAllCount]
 */

const Select = ({
    multiSelect = false,
    selectionActions = [],
    setTableSelection = () => null,
    selection = selectionInitialState,
    selectionActionMessage = null,
    selectAllCount = 0,
}) => {
    const { formatMessage } = useSafeIntl();

    let actions = [
        ...defaultSelectionActions(
            () => setTableSelection('selectAll', [], selectAllCount),
            () => setTableSelection('reset'),
            formatMessage,
        ),
    ];
    actions = actions.concat(selectionActions);

    return (
        <SelectionSpeedDials
            selection={selection}
            hidden={!multiSelect}
            actions={actions}
            reset={() => setTableSelection('reset')}
            actionMessage={
                selectionActionMessage ??
                formatMessage(MESSAGES.selectionAction)
            }
        />
    );
};

Select.propTypes = {
    selectAllCount: PropTypes.number,
    multiSelect: PropTypes.bool,
    selectionActions: PropTypes.array,
    setTableSelection: PropTypes.func,
    selection: PropTypes.object,
    selectionActionMessage: PropTypes.string,
};

export { getSelectionCol, isItemSelected, onSelect, Select };
