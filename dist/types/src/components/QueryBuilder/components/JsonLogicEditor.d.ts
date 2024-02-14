import { FunctionComponent } from 'react';
import { JsonLogicTree } from '@react-awesome-query-builder/mui';
type Props = {
    initialLogic?: JsonLogicTree;
    changeLogic: (newLogic: JsonLogicTree) => void;
};
export declare const JsonLogicEditor: FunctionComponent<Props>;
export {};
