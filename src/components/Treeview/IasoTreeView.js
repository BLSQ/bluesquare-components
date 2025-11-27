import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TreeView } from '@mui/x-tree-view';
import {
    any,
    array,
    arrayOf,
    bool,
    func,
    object,
    oneOfType,
    string,
} from 'prop-types';
import React, { useCallback } from 'react';
import { useSafeIntl } from '../../localization/useSafeIntl';
import { EnrichedTreeItem } from './EnrichedTreeItem';
import { MESSAGES } from './messages';
import { useRootData } from './requests';

const styles = theme => ({
    root: {
        color: theme.palette.gray.main,
        backgroundColor: theme.palette.ligthGray.main,
        borderRadius: '7px',
        maxHeight: '60vh',
        overflowY: 'scroll',
    },
    isFetching: {
        color: theme.palette.gray.main,
        backgroundColor: theme.palette.ligthGray.main,
        borderRadius: '7px',
        maxHeight: '60vh',
        overflowY: 'scroll',
    },
});

const useStyles = makeStyles(styles);

const IasoTreeView = ({
    getChildrenData,
    getRootData,
    label,
    multiselect,
    expanded,
    selected,
    onToggle,
    toggleOnLabelClick,
    onSelect,
    onCheckBoxClick,
    onLabelClick,
    ticked,
    parentsTicked,
    scrollIntoView,
    allowSelection,
    queryOptions = {},
    childrenQueryOptions = {},
    dependency,
}) => {
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
    const fetchChildrenData = useCallback(getChildrenData, [getChildrenData]);
    const { data: rootData, isFetching } = useRootData(
        getRootData,
        queryOptions,
        dependency,
    );
    const onNodeToggle = (_event, nodeIds) => {
        onToggle(nodeIds);
    };
    const onNodeSelect = (_event, selection) => {
        onSelect(selection);
    };
    const makeChildren = useCallback(
        data => {
            if (!data) return null;
            return data.map(item => (
                <EnrichedTreeItem
                    label={label}
                    id={item.id}
                    data={item}
                    key={`RootTreeItem ${item.id}`}
                    fetchChildrenData={fetchChildrenData}
                    dependency={dependency}
                    expanded={expanded}
                    selected={selected}
                    toggleOnLabelClick={toggleOnLabelClick}
                    onCheckBoxClick={onCheckBoxClick}
                    onLabelClick={onLabelClick}
                    withCheckbox={multiselect}
                    ticked={ticked}
                    parentsTicked={parentsTicked}
                    scrollIntoView={scrollIntoView}
                    allowSelection={allowSelection}
                    queryOptions={childrenQueryOptions}
                />
            ));
        },
        [
            label,
            fetchChildrenData,
            expanded,
            selected,
            toggleOnLabelClick,
            onCheckBoxClick,
            onLabelClick,
            multiselect,
            ticked,
            parentsTicked,
            scrollIntoView,
        ],
    );
    return (
        <TreeView
            classes={
                isFetching
                    ? { root: classes.isFetching }
                    : { root: classes.root }
            }
            expanded={expanded}
            selected={selected}
            multiSelect={multiselect}
            onNodeSelect={onNodeSelect}
            onNodeToggle={onNodeToggle}
        >
            {rootData && makeChildren(rootData)}
            {rootData && !isFetching && rootData.length === 0 && (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={100}
                >
                    {formatMessage(MESSAGES.noData)}
                </Box>
            )}
            {isFetching && (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={100}
                >
                    <CircularProgress />
                </Box>
            )}
        </TreeView>
    );
};

IasoTreeView.propTypes = {
    getChildrenData: func,
    getRootData: func,
    label: func.isRequired, // a function that will return the label, including additional icons
    multiselect: bool,
    toggleOnLabelClick: bool,
    expanded: arrayOf(string).isRequired,
    onToggle: func.isRequired,
    onSelect: func,
    onCheckBoxClick: func,
    onLabelClick: func,
    selected: oneOfType([string, arrayOf(string)]),
    ticked: oneOfType([string, arrayOf(string)]),
    parentsTicked: array,
    scrollIntoView: string,
    allowSelection: func,
    queryOptions: object,
    childrenQueryOptions: object,
    dependency: any,
};

IasoTreeView.defaultProps = {
    getChildrenData: () => {},
    getRootData: () => {},
    multiselect: false,
    toggleOnLabelClick: true,
    onSelect: () => {},
    onCheckBoxClick: () => {},
    onLabelClick: () => {},
    selected: undefined,
    ticked: [],
    parentsTicked: [],
    scrollIntoView: null,
    allowSelection: () => true,
    queryOptions: {},
    childrenQueryOptions: {},
    dependency: undefined,
};

export { IasoTreeView };
