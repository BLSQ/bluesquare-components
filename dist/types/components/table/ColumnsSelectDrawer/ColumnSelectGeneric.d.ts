import React from 'react';
import { ColumnFromReactTable } from '../Table';
type Props = {
    columns: ColumnFromReactTable[];
    hiddenColumns: string[];
    minColumns?: number;
    disabled?: boolean;
    buttonType?: 'button' | 'icon';
};
export declare const ColumnsSelectGeneric: React.FC<Props>;
export {};
