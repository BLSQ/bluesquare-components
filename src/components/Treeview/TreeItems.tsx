import React, { FunctionComponent, ReactNode } from 'react';
import { TreeItem } from '@mui/x-tree-view';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const determineClassName = (items, nextItems, disabled, style) => {
    const baseClass = disabled ? `${style.disabled} ` : '';
    if (items.size === 1) return `${baseClass}${style.singleTreeItem}`;
    if (nextItems.size === 0) return `${baseClass}${style.lastTreeItem}`;
    return `${baseClass}${style.truncatedTreeviewItem}`;
};

const makeLabel = (
    child: ReactNode,
    handleClick: (item: any) => void = () => null,
) => (
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

type Props = {
    items: Map<any, any>;
    initialItems: Map<any, any>;
    label: (value: any) => ReactNode;
    disabled?: boolean;
    style?: object;
    onLabelClick?: (item: any) => void;
};

const TreeItems: FunctionComponent<Props> = ({
    items,
    initialItems,
    disabled = false,
    style = {},
    label,
    onLabelClick = () => {},
}) => {
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
            collapseIcon={<ArrowDropDownIcon style={{ fontSize: 'large' }} />}
            expandIcon={<ArrowRightIcon style={{ fontSize: 'large' }} />}
            label={makeLabel(label(item[1]), () => onLabelClick(item[0]))}
            nodeId={item[0]}
            disabled
        >
            {items.size >= 1 ? (
                <TreeItems
                    items={nextItems}
                    initialItems={initialItems}
                    disabled={disabled}
                    style={style}
                    label={label}
                    onLabelClick={onLabelClick}
                />
            ) : null}
        </TreeItem>
    );
};

export default TreeItems;
