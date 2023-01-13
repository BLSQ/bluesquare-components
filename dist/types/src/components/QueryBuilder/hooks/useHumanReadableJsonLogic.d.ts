import { ReactNode } from 'react';
import { Fields, JsonLogicTree } from 'react-awesome-query-builder';
import { QueryBuilderListToReplace } from '../types';
declare type getHumanReadableJsonLogicReturnFn = (logic?: JsonLogicTree) => ReactNode;
export declare const useHumanReadableJsonLogic: (fields: Fields, listToReplace?: QueryBuilderListToReplace[] | undefined) => getHumanReadableJsonLogicReturnFn;
export {};
//# sourceMappingURL=useHumanReadableJsonLogic.d.ts.map