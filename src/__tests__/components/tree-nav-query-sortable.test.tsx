import React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SimpleTreeView } from '@mui/x-tree-view';
import type { Fields } from '@react-awesome-query-builder/mui';

import { DynamicTabs } from '../../components/nav/DynamicTabs';
import { TopBar } from '../../components/nav/TopBar/TopBar';
import { JsonLogicEditor } from '../../components/QueryBuilder/components/JsonLogicEditor';
import { QueryBuilder } from '../../components/QueryBuilder/components/QueryBuilder';
import { QueryBuilderInput } from '../../components/QueryBuilder/components/QueryBuilderInput';
import { AsyncSortableList } from '../../components/Sortable/asyncList';
import { SortableList } from '../../components/Sortable/list';
import { SortableItem } from '../../components/Sortable/list/Item';
import { SortableTable } from '../../components/Sortable/table';
import { DynamicSelect } from '../../components/Treeview/DynamicSelect';
import { EnrichedTreeItem } from '../../components/Treeview/EnrichedTreeItem';
import { IasoTreeView } from '../../components/Treeview/IasoTreeView';
import { TreeViewResultsCountSelect } from '../../components/Treeview/TreeViewResultsCountSelect';
import { TreeViewWithSearch } from '../../components/Treeview/TreeViewWithSearch';
import { TruncatedTreeview } from '../../components/Treeview/TruncatedTreeview';
import { intlMsg, noop, tableColumns } from '../../tests/fixtures';
import { renderWithProviders } from '../../tests/helpers';

const queryBuilderFields: Fields = {
    name: { label: 'Name', type: 'text' },
};

const SortableListItem = ({ item }: { item: { id: string } }) => (
    <span>{item.id}</span>
);

describe('tree, nav, query builder, and sortable components', () => {
    it('renders DynamicTabs', () => {
        const { container } = renderWithProviders(
            <DynamicTabs
                params={{ items: '[{}]', tab: '0' }}
                paramKey="items"
                tabParamKey="tab"
                addMessage={intlMsg('test.add', 'Add tab')}
                deleteMessage={intlMsg('test.delete', 'Delete tab')}
                defaultItem={{}}
                onTabsAdded={noop}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders TopBar with sidebar', () => {
        const { getByText } = renderWithProviders(
            <TopBar title="Dashboard" />,
            {
                withSidebar: true,
            },
        );
        expect(getByText('Dashboard')).toBeInTheDocument();
    });

    it('renders QueryBuilder', () => {
        const { container } = renderWithProviders(
            <QueryBuilder fields={queryBuilderFields} onChange={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders JsonLogicEditor', () => {
        const { container } = renderWithProviders(
            <JsonLogicEditor changeLogic={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders QueryBuilderInput', () => {
        const { container } = renderWithProviders(
            <QueryBuilderInput
                label={intlMsg('test.query', 'Query')}
                defaultOpen
                fields={queryBuilderFields}
                onChange={noop}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders SortableList', () => {
        const { getByText } = renderWithProviders(
            <SortableList
                items={[{ id: '1' }]}
                onChange={noop}
                RenderItem={SortableListItem}
            />,
        );
        expect(getByText('1')).toBeInTheDocument();
    });

    it('renders SortableItem', () => {
        const { getByText } = renderWithProviders(
            <DndContext>
                <SortableContext
                    items={['1']}
                    strategy={verticalListSortingStrategy}
                >
                    <SortableItem id="1">
                        {() => <span>sortable item</span>}
                    </SortableItem>
                </SortableContext>
            </DndContext>,
        );
        expect(getByText('sortable item')).toBeInTheDocument();
    });

    it('renders AsyncSortableList', () => {
        const { getByText } = renderWithProviders(
            <AsyncSortableList
                items={[{ id: '1' }]}
                RenderItem={SortableListItem}
            />,
        );
        expect(getByText('1')).toBeInTheDocument();
    });

    it('renders SortableTable', () => {
        const { container } = renderWithProviders(
            <SortableTable
                items={[{ id: '1' }]}
                onChange={noop}
                columns={tableColumns}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders IasoTreeView', () => {
        const { container } = renderWithProviders(
            <IasoTreeView
                label={data => data.name}
                expanded={[]}
                onToggle={noop}
                getRootData={() => []}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders TreeViewWithSearch', () => {
        const { container } = renderWithProviders(
            <TreeViewWithSearch
                request={async () => []}
                makeDropDownText={item => String(item?.name ?? item)}
                parseNodeIds={() => new Map()}
                label={item => item?.name ?? 'Item'}
                getRootData={() => []}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders TreeViewResultsCountSelect', () => {
        const { container } = renderWithProviders(
            <TreeViewResultsCountSelect />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders DynamicSelect', () => {
        const { container } = renderWithProviders(
            <DynamicSelect
                request={async () => []}
                makeDropDownText={item => String(item?.name ?? item)}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders EnrichedTreeItem', () => {
        const { getByText } = renderWithProviders(
            <SimpleTreeView defaultExpandedItems={[]}>
                <EnrichedTreeItem
                    id="1"
                    label={data => data.name}
                    data={{ id: '1', name: 'Node', has_children: false }}
                />
            </SimpleTreeView>,
        );
        expect(getByText('Node')).toBeInTheDocument();
    });

    it('renders TruncatedTreeview', () => {
        const selectedItems = new Map([['1', new Map([['2', 'Parent']])]]);
        const { container } = renderWithProviders(
            <TruncatedTreeview
                selectedItems={selectedItems}
                label={data => data.name ?? 'Item'}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });
});
