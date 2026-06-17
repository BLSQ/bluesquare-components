import type { IntlMessage } from '../types/types';

export const noop = (): void => undefined;

export const intlMsg = (
    id: string,
    defaultMessage: string,
): IntlMessage => ({
    id,
    defaultMessage,
});

export const tableColumns = [{ Header: 'Name', accessor: 'name' }];

export const tableData: { name: string }[] = [];
