import { FunctionComponent } from 'react';
import { JsonLogicTree, Fields, Settings, Conjunctions, Operators } from '@react-awesome-query-builder/mui';
type Props = {
    logic?: JsonLogicTree;
    fields: Fields;
    settings?: Settings;
    conjunctions?: Conjunctions;
    operators?: Operators;
    onChange: (jsonLogic: JsonLogicTree) => void;
};
/**
 * QueryBuilder component for building queries using a visual interface.
 * It allows users to create complex queries with fields, conjunctions, and operators.
 *
 * @param {Object} props - The properties for the QueryBuilder component.
 * @param {JsonLogicTree} [props.logic] - Initial logic for the query.
 * @param {Fields} props.fields - Fields available for building the query.
 * @param {Settings} [props.settings] - Settings for the query builder.
 * @param {Conjunctions} [props.conjunctions] - Conjunctions available in the query builder. This won't be translated by the component, meaning that this prop should contain the translated conjunctions.
 * @param {Operators} [props.operators] - Operators available in the query builder. This won't be translated by the component, meaning that this prop should contain the translated operators.
 * @param {Function} props.onChange - Callback function to handle changes in the query.
 */
export declare const QueryBuilder: FunctionComponent<Props>;
export {};
