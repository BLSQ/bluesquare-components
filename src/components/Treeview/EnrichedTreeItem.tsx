import React, {
    FunctionComponent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { makeStyles } from '@mui/styles';
import { TreeItem } from '@mui/x-tree-view';
import { useChildrenData } from './requests';

// Delay before a label click ticks a checkbox, to tell a single click from a double click
const DOUBLE_CLICK_DELAY_MS = 250;

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

type Props = {
    label: (value: any) => ReactNode;
    id: string;
    data: Record<string, any>;
    fetchChildrenData?: (id: string) => any;
    expanded?: string[];
    toggleOnLabelClick?: boolean;
    onLabelClick?: (item: any, data: any, isSelectable: boolean) => void;
    onToggleNode?: (id: string) => void;
    withCheckbox?: boolean;
    ticked?: string | any[];
    parentsTicked?: string[];
    scrollIntoView?: string;
    allowSelection?: (data: any) => boolean;
    queryOptions?: object;
    dependency?: any;
};

export const EnrichedTreeItem: FunctionComponent<Props> = ({
    label,
    id,
    fetchChildrenData = () => {}, // fetchChildrenData(id)
    expanded = [],
    toggleOnLabelClick = false,
    onLabelClick = () => {},
    onToggleNode = () => {},
    data, // additional data that can be passed up to the parent (eg org unit details)
    withCheckbox = false,
    ticked = [],
    parentsTicked = [],
    scrollIntoView,
    allowSelection = () => true,
    queryOptions = {},
    dependency = undefined,
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
    const ref = useRef<HTMLLIElement | null>(null);
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
        handleClick: React.MouseEventHandler<HTMLSpanElement> = _ => null,
        handleCheckboxClick: React.MouseEventHandler<HTMLSpanElement> = _ =>
            null,
    ) => (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                verticalAlign: 'middle',
            }}
        >
            {hasCheckbox && (
                <span
                    onClick={handleCheckboxClick}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={hasBeenTicked || (tickedParent && 'mixed')}
                    style={{ display: 'inline-flex', cursor: 'pointer' }}
                >
                    {makeIcon(hasCheckbox, hasBeenTicked, tickedParent)}
                </span>
            )}
            <span
                onClick={handleClick}
                onDoubleClick={handleLabelDoubleClick}
                onMouseDown={preventTextSelectionOnDoubleClick}
                tabIndex={0}
                role="button"
                style={{ fontWeight: hasBeenTicked ? 'bold' : undefined }}
            >
                {child}
            </span>
        </div>
    );

    const expandsOnDoubleClick = !toggleOnLabelClick && hasChildren;

    // The delayed tick must use the latest callback, as onLabelClick depends on the ticked state
    const selectItem = () => onLabelClick(id, data, isSelectable);
    const selectItemRef = useRef(selectItem);
    selectItemRef.current = selectItem;
    const pendingTickRef = useRef<ReturnType<typeof setTimeout>>();
    useEffect(() => () => clearTimeout(pendingTickRef.current), []);

    // Expansion on label click is filtered in IasoTreeView (see toggleOnLabelClick)
    const handleLabelClick = useCallback(
        e => {
            clearTimeout(pendingTickRef.current);
            // With checkboxes, wait to know whether this is a double click (which only
            // expands) so the checkbox doesn't flicker. Selecting (single-select) is
            // idempotent and needs no delay.
            if (withCheckbox && expandsOnDoubleClick) {
                if (e.detail === 1) {
                    pendingTickRef.current = setTimeout(
                        () => selectItemRef.current(),
                        DOUBLE_CLICK_DELAY_MS,
                    );
                }
                return;
            }
            selectItemRef.current();
        },
        [withCheckbox, expandsOnDoubleClick],
    );

    // When a single click on the label doesn't expand, a double click does
    const handleLabelDoubleClick = useCallback(() => {
        if (expandsOnDoubleClick) {
            onToggleNode(id);
        }
    }, [expandsOnDoubleClick, onToggleNode, id]);

    const preventTextSelectionOnDoubleClick = e => {
        if (e.detail > 1) e.preventDefault();
    };

    // Ticking the checkbox must not expand/collapse the node: MUI's TreeItem toggles
    // expansion on any click in its content, so stop the event before it gets there
    const handleCheckboxClick = useCallback(
        e => {
            e.stopPropagation();
            onLabelClick(id, data, isSelectable);
        },
        [data, id, onLabelClick, isSelectable],
    );

    useEffect(() => {
        if (scrollIntoView === id) {
            ref.current?.scrollIntoView();
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
                onToggleNode={onToggleNode}
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
                    handleLabelClick,
                    handleCheckboxClick,
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
                        handleCheckboxClick,
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
                    handleCheckboxClick,
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
