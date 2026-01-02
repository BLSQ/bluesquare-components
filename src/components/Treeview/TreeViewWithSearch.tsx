import React, {
    FunctionComponent,
    ReactNode,
    useCallback,
    useState,
} from 'react';
import { DynamicSelect } from './DynamicSelect';
import { IasoTreeView } from './IasoTreeView';
import { MESSAGES } from './messages';
import { adaptMap } from './utils';
import { IntlMessage } from '../../types/types';

const formatInitialSelectedData = selectedData => {
    if (!selectedData) return [];
    if (!Array.isArray(selectedData)) return [selectedData];
    return selectedData;
};

type Props = {
    request: (id: number) => any;
    makeDropDownText: (element: any) => string;
    parseNodeIds: (itemData: any) => any;
    label: (value: any) => ReactNode;
    getChildrenData?: (id: string) => any;
    getRootData?: () => any;
    toggleOnLabelClick?: boolean;
    onSelect?: (selection: any) => void;
    minResultCount?: number;
    inputLabelObject?: IntlMessage;
    withSearchButton?: boolean;
    toolTip?: (element, tooltipIcon) => ReactNode;
    onUpdate?: (
        newTicked: any,
        updatedParents: any,
        updatedSelectedData: any,
    ) => void;
    multiselect?: boolean;
    preselected?: string[];
    preexpanded?: Map<any, any>;
    selectedData?: Record<string, any> | Record<string, any>[];
    allowSelection?: (data: any) => boolean;
    dependency?: any;
    childrenDependency?: any;
    queryOptions?: object;
    childrenQueryOptions?: object;
    fetchDetails?: (value: any) => any;
};

export const TreeViewWithSearch: FunctionComponent<Props> = ({
    label,
    getChildrenData = () => {},
    getRootData = () => {},
    toggleOnLabelClick = true,
    onSelect = () => {},
    minResultCount = 50,
    inputLabelObject = MESSAGES.search,
    withSearchButton = false,
    request,
    makeDropDownText,
    toolTip,
    parseNodeIds,
    onUpdate = () => {},
    multiselect = false,
    preselected,
    preexpanded,
    selectedData = [],
    allowSelection = () => true,
    dependency,
    childrenDependency,
    queryOptions = {},
    childrenQueryOptions = {},
    fetchDetails = item => item,
}) => {
    const [data, setData] = useState(formatInitialSelectedData(selectedData));
    const [selected, setSelected] = useState(
        preselected || (multiselect ? [] : ''),
    );
    const [expanded, setExpanded] = useState(adaptMap(preexpanded) ?? []);
    const [ticked, setTicked] = useState(preselected ?? []);
    const [parentsTicked, setParentsTicked] = useState(
        preexpanded ?? new Map(),
    );
    const [scrollIntoView, setScrollIntoView] = useState<string | undefined>(
        !Array.isArray(preselected) ? preselected : undefined,
    );

    const onNodeSelect = useCallback(
        selection => {
            setSelected(selection);
            if (multiselect) {
                // disabling when multiselect to avoid allowing user to confirm data while boxes are unticked
                onSelect(selection);
            }
        },
        [onSelect, multiselect],
    );

    // Tick and untick checkbox
    const onLabelClick = useCallback(
        (id, itemData, isSelectable) => {
            let newTicked;
            let updatedParents;
            let updatedSelectedData;
            if (isSelectable) {
                if (multiselect) {
                    newTicked = ticked.includes(id)
                        ? ticked.filter(tickedId => tickedId !== id)
                        : [...ticked, id];
                } else {
                    newTicked = [id];
                }
                setTicked(newTicked);
            }
            if (multiselect) {
                updatedParents = new Map(parentsTicked);
            } else {
                updatedParents = new Map();
            }
            if (parentsTicked.has(id)) {
                updatedParents.delete(id);
                updatedSelectedData =
                    data?.filter(d => d.id !== parseInt(id, 10)) ?? [];
            } else {
                updatedParents.set(id, parseNodeIds(itemData));
                if (multiselect) {
                    if (newTicked.includes(itemData.id)) {
                        updatedSelectedData = [...data, itemData];
                    } else {
                        // if unticking, itemData must be removed from data
                        updatedSelectedData = data.filter(
                            d => d.id !== parseInt(itemData.id, 10),
                        );
                    }
                } else {
                    updatedSelectedData = [itemData];
                }
            }

            onUpdate(newTicked, updatedParents, updatedSelectedData);
            setParentsTicked(updatedParents);
            setData(updatedSelectedData);
        },
        [onUpdate, ticked, parentsTicked, multiselect, data, parseNodeIds],
    );

    const onSearchSelect = useCallback(
        // this is an org unit so you can access the parents here
        async searchSelection => {
            const details = await fetchDetails(searchSelection);
            const ancestors = parseNodeIds(details);
            const idsToExpand = Array.from(ancestors.keys()).map((id: number) =>
                id.toString(),
            );
            const currentId = idsToExpand[idsToExpand.length - 1];
            // Not expanding the last selected item as it messes with the scrollIntoView
            idsToExpand.pop();

            if (multiselect) {
                setExpanded([...expanded, ...idsToExpand]);
                const newSelected = [...selected, currentId];
                onNodeSelect(newSelected);
            } else {
                setExpanded(idsToExpand);
                const newParentsTicked = new Map();
                newParentsTicked.set(currentId, ancestors);
                onNodeSelect(currentId);
                setData([searchSelection]);
                // We don't call it in multiselect because it will only be called on label click
                // We use it here to auto select the search item selected
                onUpdate(currentId, newParentsTicked, [searchSelection]);
            }
            setScrollIntoView(currentId);
        },
        [
            parseNodeIds,
            onNodeSelect,
            selected,
            onUpdate,
            expanded,
            multiselect,
            dependency,
        ],
    );

    return (
        <>
            <DynamicSelect
                onSelect={onSearchSelect}
                minResultCount={minResultCount}
                inputLabelObject={inputLabelObject}
                withSearchButton={withSearchButton}
                request={request}
                makeDropDownText={makeDropDownText}
                toolTip={toolTip}
                dependency={childrenDependency}
            />
            <IasoTreeView
                label={label}
                getChildrenData={getChildrenData}
                getRootData={getRootData}
                toggleOnLabelClick={toggleOnLabelClick}
                selected={selected}
                onSelect={onNodeSelect}
                expanded={expanded}
                onToggle={setExpanded}
                onLabelClick={onLabelClick}
                multiselect={multiselect}
                ticked={ticked}
                parentsTicked={adaptMap(parentsTicked)}
                scrollIntoView={scrollIntoView}
                allowSelection={allowSelection}
                dependency={dependency}
                queryOptions={queryOptions}
                childrenQueryOptions={childrenQueryOptions}
            />
        </>
    );
};
