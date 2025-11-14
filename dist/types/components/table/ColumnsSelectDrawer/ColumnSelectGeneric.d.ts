import React from 'react';
import { Column } from '../Table/types';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"input" | "search" | "switch" | "list" | "toolbar" | "placeholder" | "root" | "listItem">;
type Props = {
    columns: Column[];
    hiddenColumns: string[];
    minColumns?: number;
    disabled?: boolean;
    buttonType?: 'button' | 'icon';
    handleChangeVisibleColumns?: () => void;
};
declare const ColumnsSelectGeneric: React.FC<Props>;
export { ColumnsSelectGeneric, Props };
