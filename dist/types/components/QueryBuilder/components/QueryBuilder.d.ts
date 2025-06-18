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
export declare const QueryBuilder: FunctionComponent<Props>;
export {};
