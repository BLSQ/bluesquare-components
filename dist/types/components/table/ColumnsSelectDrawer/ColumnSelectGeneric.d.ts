import React from 'react';
import { ColumnFromReactTable } from '../Table';
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"search" | "input" | "switch" | "toolbar" | "placeholder" | "root" | "list" | "listItem">;
declare type Props = {
    columns: ColumnFromReactTable[];
    hiddenColumns: string[];
    minColumns?: number;
    disabled?: boolean;
    buttonType?: 'button' | 'icon';
};
declare const ColumnsSelectGeneric: React.FC<Props>;
export { ColumnsSelectGeneric, Props };
