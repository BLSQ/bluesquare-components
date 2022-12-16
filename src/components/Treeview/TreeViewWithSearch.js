import React, { useState, useCallback } from 'react';
import {
    string,
    bool,
    func,
    object,
    number,
    oneOfType,
    array,
    any,
} from 'prop-types';
import { DynamicSelect } from './DynamicSelect';
import { MESSAGES } from './messages';
import { IasoTreeView } from './IasoTreeView';
import { adaptMap } from './utils';

const formatInitialSelectedData = selectedData => {
    if (!selectedData) return [];
    if (!Array.isArray(selectedData)) return [selectedData];
    return selectedData;
};

const TreeViewWithSearch = ({
    label,
    getChildrenData,
    getRootData,
    toggleOnLabelClick,
    onSelect,
    minResultCount,
    inputLabelObject,
    withSearchButton,
    request,
    makeDropDownText,
    toolTip,
    parseNodeIds,
    onUpdate,
    multiselect,
    preselected, // TODO rename
    preexpanded, // TODO rename
    selectedData,
    allowSelection,
}) => {
    const [data, setData] = useState(formatInitialSelectedData(selectedData));
    const [selected, setSelected] = useState(
        preselected || (multiselect ? [] : ''),
    );
    const [expanded, setExpanded] = useState(adaptMap(preexpanded) ?? []);
    const [ticked, setTicked] = useState(preselected ?? []);
    const [parentsTicked, setParentsTicked] = useState(
        preexpanded ?? new Map(),
    );
    const [scrollIntoView, setScrollIntoView] = useState(
        !Array.isArray(preselected) ? preselected : null,
    );

    const onNodeSelect = useCallback(
        selection => {
            console.log(
                'onNodeSelect',
                selection,
                selected,
                ticked,
                ticked.includes(selection),
            );
            if (!multiselect) {
                setSelected(selection);
            } else {
                if (!ticked.includes(selection[0])) {
                    console.log('not ticked -> ticked');
                    setSelected([...selected, ...selection]);
                } else {
                    console.log('ticked -> unticked');
                    setSelected(
                        selection.filter(orgUnitId => orgUnitId !== selection),
                    );
                }
                onSelect(selection);
            }
        },
        [onSelect, multiselect, selected],
    );

    // Tick and untick checkbox
    const onLabelClick = useCallback(
        (id, itemData, isSelectable) => {
            console.log('onLabelClick', id, itemData, isSelectable);
            let newTicked;
            let updatedParents;
            let updatedSelectedData;
            if (isSelectable) {
                if (multiselect) {
                    newTicked = ticked.includes(id)
                        ? ticked.filter(tickedId => tickedId !== id)
                        : [...ticked, id];
                } else {
                    newTicked = [id];
                }
                setTicked(newTicked);
            }
            if (multiselect) {
                updatedParents = new Map(parentsTicked);
            } else {
                updatedParents = new Map();
            }
            if (parentsTicked.has(id)) {
                updatedParents.delete(id);
                updatedSelectedData = data?.filter(d => d.id !== id) ?? [];
            } else {
                updatedParents.set(id, parseNodeIds(itemData));
                if (multiselect) {
                    updatedSelectedData = [...data, itemData];
                } else {
                    updatedSelectedData = [itemData];
                }
            }
            onUpdate(newTicked, updatedParents, updatedSelectedData);
            setParentsTicked(updatedParents);
            setData(updatedSelectedData);
        },
        [onUpdate, ticked, parentsTicked, multiselect, data, parseNodeIds],
    );

    const onSearchSelect = useCallback(
        // this is an org unit so you can access the parents here
        searchSelection => {
            const ancestors = parseNodeIds(searchSelection);
            const idsToExpand = Array.from(ancestors.keys()).map(id =>
                id.toString(),
            );
            const currentId = idsToExpand[idsToExpand.length - 1];
            // Not expanding the last selected item as it messes with the scrollIntoView
            idsToExpand.pop();

            if (multiselect) {
                setExpanded([...expanded, ...idsToExpand]);
                const newSelected = [...selected, currentId];
                onNodeSelect(newSelected);
            } else {
                setExpanded(idsToExpand);
                const newParentsTicked = new Map();
                newParentsTicked.set(currentId, ancestors);
                onNodeSelect(currentId);
                setData([searchSelection]);
                // We don't call it in multiselect because it will only be called on label click
                // We use it here to auto select the search item selected
                onUpdate(currentId, newParentsTicked, [searchSelection]);
            }
            setScrollIntoView(currentId);
        },
        [parseNodeIds, onNodeSelect, selected, onUpdate, expanded, multiselect],
    );

    return (
        <>
            <DynamicSelect
                onSelect={onSearchSelect}
                minResultCount={minResultCount}
                inputLabelObject={inputLabelObject}
                withSearchButton={withSearchButton}
                request={request}
                makeDropDownText={makeDropDownText}
                toolTip={toolTip}
            />
            <IasoTreeView
                label={label}
                getChildrenData={getChildrenData}
                getRootData={getRootData}
                toggleOnLabelClick={toggleOnLabelClick}
                selected={selected}
                onSelect={onNodeSelect}
                expanded={expanded}
                onToggle={setExpanded}
                onLabelClick={onLabelClick}
                multiselect={multiselect}
                ticked={ticked}
                parentsTicked={adaptMap(parentsTicked)}
                scrollIntoView={scrollIntoView}
                allowSelection={allowSelection}
            />
        </>
    );
};

TreeViewWithSearch.propTypes = {
    getChildrenData: func,
    getRootData: func,
    toggleOnLabelClick: bool,
    onSelect: func,
    minResultCount: number,
    inputLabelObject: object,
    withSearchButton: bool,
    request: func.isRequired,
    makeDropDownText: func.isRequired,
    toolTip: func,
    parseNodeIds: func.isRequired,
    onUpdate: func,
    multiselect: bool,
    preselected: oneOfType([string, array]),
    // preexpanded is a Map
    preexpanded: any,
    selectedData: oneOfType([object, array]),
    label: func.isRequired,
    allowSelection: func,
};

TreeViewWithSearch.defaultProps = {
    getChildrenData: () => {},
    getRootData: () => {},
    toggleOnLabelClick: true,
    onSelect: () => {},
    minResultCount: 50,
    inputLabelObject: MESSAGES.search,
    withSearchButton: false,
    toolTip: null,
    onUpdate: () => {},
    multiselect: false,
    preselected: null,
    preexpanded: null,
    selectedData: [],
    allowSelection: () => true,
};

export { TreeViewWithSearch };
