import Checkbox from '@mui/material/Checkbox';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import React from 'react';

import { useSafeIntl } from '../../../utils/useSafeIntl';
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
    getIsSelectionDisabled = () => false,
) => ({
    Header: formatMessage(MESSAGES.selection),
    accessor: 'selected',
    id: 'selectionColumn',
    width: 100,
    sortable: false,
    Cell: settings => (
        <Checkbox
            color="primary"
            disabled={getIsSelectionDisabled(settings.cell.row.original)}
            checked={isItemSelected(settings.cell.row.original, selection)}
            onChange={event =>
                onSelect({
                    isSelected: event.target.checked,
                    item: settings.cell.row.original,
                    selection,
                    setTableSelection,
                    count,
                })
            }
        />
    ),
});

const Select = ({
    count,
    multiSelect,
    selectionActions,
    setTableSelection,
    selection,
    selectionActionMessage,
}) => {
    const { formatMessage } = useSafeIntl();

    let actions = [
        ...defaultSelectionActions(
            () => setTableSelection('selectAll', [], count),
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

Select.defaultProps = {
    count: 0,
    multiSelect: false,
    selectionActions: [],
    selection: selectionInitialState,
    setTableSelection: () => null,
    selectionActionMessage: null,
};

Select.propTypes = {
    count: PropTypes.number,
    multiSelect: PropTypes.bool,
    selectionActions: PropTypes.array,
    setTableSelection: PropTypes.func,
    selection: PropTypes.object,
    selectionActionMessage: PropTypes.string,
};

export { getSelectionCol, isItemSelected, onSelect, Select };

