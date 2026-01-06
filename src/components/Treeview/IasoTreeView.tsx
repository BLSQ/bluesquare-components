import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TreeView } from '@mui/x-tree-view';
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
//@ts-ignore
const useStyles = makeStyles(styles);

type Props = {
    label: (value: any) => ReactNode; // a function that will return the label, including additional icons
    expanded: string[];
    onToggle: (nodeIds: any[]) => void;
    getChildrenData?: (id: string) => any;
    getRootData?: () => any;
    multiselect?: boolean;
    toggleOnLabelClick?: boolean;
    onSelect?: (selection: any) => void;
    onLabelClick?: (item: any, data: any, isSelectable: boolean) => void;
    selected?: string | string[];
    ticked?: string | string[];
    parentsTicked?: string[];
    scrollIntoView?: string;
    allowSelection?: (data: any) => boolean;
    queryOptions?: object;
    childrenQueryOptions?: object;
    dependency?: any;
};

export const IasoTreeView: FunctionComponent<Props> = ({
    getChildrenData = () => {},
    getRootData = () => {},
    label,
    multiselect = false,
    expanded,
    selected,
    onToggle,
    toggleOnLabelClick = true,
    onSelect = () => {},
    onLabelClick = () => {},
    ticked = [],
    parentsTicked = [],
    scrollIntoView,
    allowSelection = () => true,
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
                    toggleOnLabelClick={toggleOnLabelClick}
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
            toggleOnLabelClick,
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
