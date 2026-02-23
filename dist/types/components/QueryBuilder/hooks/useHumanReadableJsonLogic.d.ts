import { ReactNode } from 'react';
import { Fields, JsonLogicTree } from '@react-awesome-query-builder/mui';
import { QueryBuilderListToReplace } from '../types';
type getHumanReadableJsonLogicReturnFn = (logic?: JsonLogicTree) => ReactNode;
export declare const useHumanReadableJsonLogic: (fields: Fields, listToReplace?: QueryBuilderListToReplace[]) => getHumanReadableJsonLogicReturnFn;
export {};
