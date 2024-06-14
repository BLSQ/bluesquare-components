import React from 'react';
import { ColumnFromReactTable } from '../Table';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"placeholder" | "toolbar" | "root" | "search" | "list" | "listItem" | "switch" | "input">;
type Props = {
    columns: ColumnFromReactTable[];
    hiddenColumns: string[];
    minColumns?: number;
    disabled?: boolean;
    buttonType?: 'button' | 'icon';
};
declare const ColumnsSelectGeneric: React.FC<Props>;
export { ColumnsSelectGeneric, Props };
