import {
    defaultSelectionActions,
    getColumnsHeadersInfos,
    getOrderArray,
    getParamsKey,
    getSimplifiedColumns,
    getSort,
    getTableParams,
    getTableUrl,
    selectionInitialState,
    setTableSelection,
    tableInitialResult,
} from './tableUtils';

describe('tableUtils', () => {
    it('builds table urls', () => {
        expect(getTableUrl('forms', { page: 1, order: 'name' })).toBe(
            '/api/forms/?&page=1&order=name',
        );
    });

    it('converts sort arrays', () => {
        expect(getSort([{ id: 'name', desc: false }])).toBe('name');
        expect(getSort([{ id: 'name', desc: true }])).toBe('-name');
    });

    it('parses order strings', () => {
        expect(getOrderArray('name,-created_at')).toEqual([
            { id: 'name', desc: false },
            { id: 'created_at', desc: true },
        ]);
    });

    it('simplifies columns', () => {
        expect(
            getSimplifiedColumns([
                { accessor: 'name' },
                { accessor: 'group', columns: [{ accessor: 'child' }] },
            ]),
        ).toEqual([
            { id: 'name' },
            { id: 'group', columns: [{ id: 'child' }] },
        ]);
    });

    it('prefixes param keys', () => {
        expect(getParamsKey('form', 'page')).toBe('formPage');
        expect(getParamsKey('', 'page')).toBe('page');
    });

    it('builds table params from url params', () => {
        const params = getTableParams(
            { page: '2', pageSize: '25', order: 'name' },
            '',
            [],
            {},
        );
        expect(params).toMatchObject({
            limit: 25,
            page: 2,
            order: 'name',
        });
    });

    it('updates table selection', () => {
        expect(
            setTableSelection(selectionInitialState, 'select', [{ id: 1 }], 10),
        ).toMatchObject({
            selectedItems: [{ id: 1 }],
            selectCount: 1,
        });
        expect(setTableSelection(selectionInitialState, 'reset', [], 10)).toBe(
            selectionInitialState,
        );
    });

    it('wraps columns with header info', () => {
        const columns = getColumnsHeadersInfos([
            { Header: 'Name', accessor: 'name', headerInfo: 'info' },
        ]);
        expect(columns[0].Header).toBeTruthy();
    });

    it('exposes initial table state', () => {
        expect(tableInitialResult).toEqual({
            data: [],
            pages: 0,
            count: 0,
        });
    });

    it('builds default selection actions', () => {
        const selectAll = vi.fn();
        const unSelectAll = vi.fn();
        const formatMessage = (msg: { defaultMessage: string }) =>
            msg.defaultMessage;

        const actions = defaultSelectionActions(
            selectAll,
            unSelectAll,
            formatMessage,
        );

        expect(actions).toHaveLength(2);
        expect(actions[0].label).toBe('Select all');
        expect(actions[1].label).toBe('Unselect all');

        actions[0].onClick();
        actions[1].onClick();

        expect(selectAll).toHaveBeenCalled();
        expect(unSelectAll).toHaveBeenCalled();
    });
});
