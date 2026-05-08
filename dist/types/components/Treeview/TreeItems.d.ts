import { FunctionComponent, ReactNode } from 'react';
type Props = {
    items: Map<any, any>;
    initialItems: Map<any, any>;
    label: (value: any) => ReactNode;
    disabled?: boolean;
    style?: object;
    onLabelClick?: (item: any) => void;
};
declare const TreeItems: FunctionComponent<Props>;
export default TreeItems;
