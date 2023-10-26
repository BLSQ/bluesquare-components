import React, { useRef } from 'react';
import { func, any, bool } from 'prop-types';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { makeStyles } from '@mui/styles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const alignTailIcon = { display: 'flex', alignItems: 'center' };
const removeBackgroundOnTabNav = {
    '&.MuiTreeItem-root:focus > .MuiTreeItem-content .MuiTreeItem-label': {
        backgroundColor: 'white',
    },
};
const treeItemStyle = {
    '& .MuiTreeItem-label': {
        ...alignTailIcon,
        paddingLeft: '0px',
    },
    ...removeBackgroundOnTabNav,
};
// TODO remove repetitions
const styles = theme => ({
    truncatedTreeview: {
        color: theme.palette.mediumGray.main,
    },
    singleTreeItem: {
        ...treeItemStyle,
        color: theme.palette.gray.main,
    },
    truncatedTreeviewItem: {
        ...treeItemStyle,
        color: theme.palette.mediumGray.main,
    },
    lastTreeItem: {
        '& .MuiTreeItem-label': {
            ...alignTailIcon,
        },
        ...removeBackgroundOnTabNav,
        color: theme.palette.gray.main,
    },
    removeIconContainer: {
        paddingLeft: '5px',
        '& .MuiTreeItem-iconContainer': {
            display: 'none',
        },
    },
    disabled: {
        '& .MuiTreeItem-label:hover': {
            backgroundColor: 'white',
            cursor: 'default',
        },
    },
});
const determineClassName = (items, nextItems, disabled, style) => {
    const baseClass = disabled ? `${style.disabled} ` : '';
    if (items.size === 1) return `${baseClass}${style.singleTreeItem}`;
    if (nextItems.size === 0) return `${baseClass}${style.lastTreeItem}`;
    return `${baseClass}${style.truncatedTreeviewItem}`;
};
const useStyles = makeStyles(styles);
const makeLabel = (child, handleClick = () => null) => (
    <div
        style={{
            display: 'inline-flex',
            alignItems: 'center',
            verticalAlign: 'middle',
        }}
    >
        <span onClick={handleClick} tabIndex={0} role="button">
            {child}
        </span>
    </div>
);
const TruncatedTreeview = ({ selectedItems, label, redirect, disabled }) => {
    const style = useStyles();
    const mouseDownTime = useRef();
    const onLabelClick = id => e => {
        e.preventDefault();
        if (new Date() - mouseDownTime.current < 150) {
            redirect(id);
        }
    };
    const makeTreeItems = (items, initialItems) => {
        if (items.size === 0) return null;
        const nextItems = new Map(items);
        // first entry of the map in the form of an array: [key,value]
        const item = nextItems.entries().next().value;
        nextItems.delete(item[0]);
        const className = determineClassName(
            initialItems,
            nextItems,
            disabled,
            style,
        );
        return (
            <TreeItem
                key={item[0].toString() + nextItems.size.toString()}
                className={className}
                collapseIcon={
                    <ArrowDropDownIcon style={{ fontSize: 'large' }} />
                }
                expandIcon={<ArrowRightIcon style={{ fontSize: 'large' }} />}
                label={makeLabel(label(item[1]), () => onLabelClick(item[0]))}
                nodeId={item[0]}
                disabled
            >
                {items.size >= 1
                    ? makeTreeItems(nextItems, initialItems)
                    : null}
            </TreeItem>
        );
    };
    const expanded =
        Array.from(selectedItems.keys()).map(item => item.toString()) ?? [];
    return (
        <TreeView
            onMouseDown={() => {
                mouseDownTime.current = new Date();
            }}
            disableSelection
            expanded={expanded}
            classes={{
                root: expanded.length === 1 && style.removeIconContainer,
            }}
            className={style.truncatedTreeview}
        >
            {makeTreeItems(selectedItems, selectedItems)}
        </TreeView>
    );
};

TruncatedTreeview.propTypes = {
    // in fact a nested map : {orgUnitId:{parentId:parentName}}
    selectedItems: any,
    label: func.isRequired,
    redirect: func,
    disabled: bool,
};
TruncatedTreeview.defaultProps = {
    selectedItems: null,
    redirect: () => null,
    disabled: false,
};

export { TruncatedTreeview };
