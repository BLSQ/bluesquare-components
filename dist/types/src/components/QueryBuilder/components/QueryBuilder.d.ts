import { FunctionComponent } from 'react';
import { JsonLogicTree, Fields } from 'react-awesome-query-builder';
declare type Props = {
    logic: JsonLogicTree;
    fields: Fields;
    onChange: (jsonLogic: JsonLogicTree) => void;
};
export declare const QueryBuilder: FunctionComponent<Props>;
export {};
