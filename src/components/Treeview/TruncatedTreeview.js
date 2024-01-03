import React, { useRef } from 'react';
import { func, any, bool } from 'prop-types';
import { TreeView } from '@mui/x-tree-view';
import { makeStyles } from '@mui/styles';
import TreeItems from './TreeItems';

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
const useStyles = makeStyles(styles);
const TruncatedTreeview = ({ selectedItems, label, redirect, disabled }) => {
    const style = useStyles();
    const mouseDownTime = useRef();
    const onLabelClick = id => e => {
        e.preventDefault();
        if (new Date() - mouseDownTime.current < 150) {
            redirect(id);
        }
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
            <TreeItems
                items={selectedItems}
                initialItems={selectedItems}
                disabled={disabled}
                style={style}
                label={label}
                onLabelClick={onLabelClick}
            />
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
