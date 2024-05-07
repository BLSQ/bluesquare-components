import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { makeStyles } from '@mui/styles';
import { TreeItem } from '@mui/x-tree-view';
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
import React, { useCallback, useEffect, useRef } from 'react';
import { useChildrenData } from './requests';

const styles = theme => ({
    treeItem: {
        '&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label':
            {
                backgroundColor: theme.palette.primary.background,
                alignItems: 'center',
                color: theme.palette.primary.main,
            },
    },
    unselectableTreeItem: {
        '&.MuiTreeItem-root > .MuiTreeItem-content .MuiTreeItem-label': {
            alignItems: 'center',
            color: theme.palette.mediumGray.main,
        },
    },
    checkbox: {
        color: theme.palette.mediumGray.main,
        fontSize: '16px',
        marginRight: '5px',
    },
});

const useStyles = makeStyles(styles);

const EnrichedTreeItem = ({
    label,
    id,
    fetchChildrenData, // fetchChildrenData(id)
    expanded,
    toggleOnLabelClick,
    onLabelClick,
    data, // additional data that can be passed up to the parent (eg org unit details)
    withCheckbox,
    ticked,
    parentsTicked,
    scrollIntoView,
    allowSelection,
    queryOptions = {},
    dependency,
}) => {
    const classes = useStyles();
    const isExpanded = expanded.includes(id);
    const isTicked = ticked.includes(id);
    const isTickedParent = parentsTicked.includes(id);
    const isSelectable = allowSelection(data);
    const { data: childrenData, isLoading } = useChildrenData({
        request: fetchChildrenData,
        id,
        options: { ...queryOptions, enabled: isExpanded },
        dependency,
    });
    const ref = useRef();
    const hasChildren = data.has_children;

    const makeIcon = (hasCheckbox, hasBeenTicked, tickedParent) => {
        if (!hasCheckbox) return null;
        if (hasBeenTicked) return <CheckBoxIcon className={classes.checkbox} />;
        if (tickedParent)
            return <IndeterminateCheckBoxIcon className={classes.checkbox} />;
        return (
            <CheckBoxOutlineBlankOutlinedIcon className={classes.checkbox} />
        );
    };

    const makeLabel = (
        child,
        hasCheckbox,
        hasBeenTicked,
        tickedParent,
        handleClick = () => null,
    ) => (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                verticalAlign: 'middle',
            }}
        >
            {makeIcon(hasCheckbox, hasBeenTicked, tickedParent)}
            <span onClick={handleClick} tabIndex={0} role="button">
                {child}
            </span>
        </div>
    );

    const handleLabelClick = useCallback(
        e => {
            if (!toggleOnLabelClick) {
                e.preventDefault();
            }
            onLabelClick(id, data, isSelectable);
        },
        [data, id, onLabelClick, toggleOnLabelClick, isSelectable],
    );

    useEffect(() => {
        if (scrollIntoView === id) {
            ref.current.scrollIntoView();
        }
    }, [scrollIntoView, id, ref]);

    const makeSubTree = subTreeData => {
        if (!subTreeData) return null;
        return subTreeData.map(unit => (
            <EnrichedTreeItem
                key={`TreeItem ${unit.id}`}
                label={label}
                id={unit.id}
                fetchChildrenData={fetchChildrenData}
                expanded={expanded}
                toggleOnLabelClick={toggleOnLabelClick}
                onLabelClick={onLabelClick}
                data={unit}
                withCheckbox={withCheckbox}
                ticked={ticked}
                parentsTicked={parentsTicked}
                scrollIntoView={scrollIntoView}
                allowSelection={allowSelection}
                queryOptions={queryOptions}
                dependency={dependency}
            />
        ));
    };
    if (isExpanded && isLoading) {
        return (
            <TreeItem
                classes={{
                    root: isSelectable
                        ? classes.treeItem
                        : classes.unselectableTreeItem,
                }}
                ref={ref}
                label={makeLabel(
                    label(data),
                    withCheckbox,
                    isTicked,
                    isTickedParent,
                )}
                nodeId={id}
                icon={<ArrowDropDownIcon style={{ fontSize: 'large' }} />}
            />
        );
    }
    if (hasChildren) {
        return (
            <div style={{ display: 'flex' }}>
                <TreeItem
                    classes={{
                        root: isSelectable
                            ? classes.treeItem
                            : classes.unselectableTreeItem,
                    }}
                    ref={ref}
                    label={makeLabel(
                        label(data),
                        withCheckbox,
                        isTicked,
                        isTickedParent,
                        handleLabelClick,
                    )}
                    nodeId={id}
                    collapseIcon={
                        <ArrowDropDownIcon style={{ fontSize: '24px' }} />
                    }
                    expandIcon={<ArrowRightIcon style={{ fontSize: '24px' }} />}
                >
                    {childrenData && isExpanded && makeSubTree(childrenData)}
                    {!isExpanded && <div />}
                </TreeItem>
            </div>
        );
    }
    return (
        <div style={{ display: 'flex' }}>
            <TreeItem
                classes={{
                    root: isSelectable
                        ? classes.treeItem
                        : classes.unselectableTreeItem,
                }}
                ref={ref}
                label={makeLabel(
                    label(data),
                    withCheckbox,
                    isTicked,
                    undefined,
                    handleLabelClick,
                )}
                nodeId={id}
                collapseIcon={
                    <ArrowDropDownIcon style={{ fontSize: '24px' }} />
                }
                expandIcon={<ArrowRightIcon style={{ fontSize: '24px' }} />}
            />
        </div>
    );
};

EnrichedTreeItem.propTypes = {
    label: func.isRequired,
    id: string.isRequired,
    fetchChildrenData: func,
    expanded: arrayOf(string),
    toggleOnLabelClick: bool,
    data: object.isRequired,
    onLabelClick: func,
    withCheckbox: bool,
    ticked: oneOfType([string, array]),
    parentsTicked: array,
    scrollIntoView: string,
    allowSelection: func,
    queryOptions: object,
    dependency: any,
};

EnrichedTreeItem.defaultProps = {
    fetchChildrenData: () => {},
    expanded: [],
    toggleOnLabelClick: true,
    onLabelClick: () => {},
    withCheckbox: false,
    ticked: [],
    parentsTicked: [],
    scrollIntoView: null,
    allowSelection: () => true,
    queryOptions: {},
    dependency: undefined,
};

export { EnrichedTreeItem };
