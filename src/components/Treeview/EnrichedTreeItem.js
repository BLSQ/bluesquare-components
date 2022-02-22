import React, { useCallback, useRef, useEffect } from 'react';
import {
    string,
    func,
    arrayOf,
    bool,
    object,
    array,
    oneOfType,
} from 'prop-types';
import { TreeItem } from '@material-ui/lab';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { makeStyles } from '@material-ui/core/styles';
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

    const makeLabel = (child, hasCheckbox, hasBeenTicked, tickedParent) => (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                verticalAlign: 'middle',
            }}
        >
            {makeIcon(hasCheckbox, hasBeenTicked, tickedParent)}
            {child}
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
                    )}
                    nodeId={id}
                    collapseIcon={
                        <ArrowDropDownIcon style={{ fontSize: '24px' }} />
                    }
                    expandIcon={<ArrowRightIcon style={{ fontSize: '24px' }} />}
                    onLabelClick={handleLabelClick}
                >
                    {childrenData && isExpanded && makeSubTree(childrenData)}
                    {!isExpanded && <div />}
                </TreeItem>
            </div>
        );
    }
    if (!hasChildren && !isSelectable) return null;
    return (
        <div style={{ display: 'flex' }}>
            <TreeItem
                classes={{
                    root: isSelectable
                        ? classes.treeItem
                        : classes.unselectableTreeItem,
                }}
                ref={ref}
                label={makeLabel(label(data), withCheckbox, isTicked)}
                nodeId={id}
                collapseIcon={
                    <ArrowDropDownIcon style={{ fontSize: '24px' }} />
                }
                expandIcon={<ArrowRightIcon style={{ fontSize: '24px' }} />}
                onLabelClick={handleLabelClick}
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
};

export { EnrichedTreeItem };
