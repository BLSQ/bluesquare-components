import React from 'react';
import { ColumnFromReactTable } from '../Table';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"input" | "search" | "switch" | "list" | "toolbar" | "placeholder" | "root" | "listItem">;
type Props = {
    columns: ColumnFromReactTable[];
    hiddenColumns: string[];
    minColumns?: number;
    disabled?: boolean;
    buttonType?: 'button' | 'icon';
};
declare const ColumnsSelectGeneric: React.FC<Props>;
export { ColumnsSelectGeneric, Props };
