/**
 * react-table v7 keeps plugin APIs off the base interfaces until they are merged in.
 * This table uses sorting, pagination, and column resize, so those plugins have to
 * be part of TableInstance / TableState or useTable() will not type-check.
 */
import {
    UsePaginationInstanceProps,
    UsePaginationOptions,
    UsePaginationState,
    UseResizeColumnsColumnOptions,
    UseResizeColumnsColumnProps,
    UseResizeColumnsOptions,
    UseResizeColumnsState,
    UseSortByColumnOptions,
    UseSortByColumnProps,
    UseSortByHooks,
    UseSortByInstanceProps,
    UseSortByOptions,
    UseSortByState,
} from 'react-table';

declare module 'react-table' {
    export interface TableOptions<D extends object>
        extends UsePaginationOptions<D>,
            UseResizeColumnsOptions<D>,
            UseSortByOptions<D> {}

    export interface Hooks<D extends object = {}>
        extends UseSortByHooks<D> {}

    export interface TableInstance<D extends object = {}>
        extends UsePaginationInstanceProps<D>,
            UseSortByInstanceProps<D> {}

    export interface TableState<D extends object = {}>
        extends UsePaginationState<D>,
            UseResizeColumnsState<D>,
            UseSortByState<D> {}

    export interface ColumnInterface<D extends object = {}>
        extends UseResizeColumnsColumnOptions<D>,
            UseSortByColumnOptions<D> {}

    export interface ColumnInstance<D extends object = {}>
        extends UseResizeColumnsColumnProps<D>,
            UseSortByColumnProps<D> {}
}
