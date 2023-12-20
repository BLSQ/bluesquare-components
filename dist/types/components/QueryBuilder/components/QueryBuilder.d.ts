import { FunctionComponent } from 'react';
import { JsonLogicTree, Fields } from '@react-awesome-query-builder/mui';
type Props = {
    logic?: JsonLogicTree;
    fields: Fields;
    onChange: (jsonLogic: JsonLogicTree) => void;
    currentDateString?: string;
    currentDateTimeString?: string;
};
export declare const QueryBuilder: FunctionComponent<Props>;
export {};
