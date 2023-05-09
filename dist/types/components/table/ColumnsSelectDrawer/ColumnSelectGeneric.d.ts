import React from 'react';
import { Column } from '../Table';
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"toolbar" | "search" | "input" | "switch" | "list" | "listItem" | "placeholder" | "root">;
declare type Props = {
    columns: Column[];
    hiddenColumns: string[];
    minColumns?: number;
};
declare const ColumnsSelectGeneric: React.FC<Props>;
export { ColumnsSelectGeneric, Props };
