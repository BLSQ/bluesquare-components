import { ReactNode } from 'react';
import { Fields, JsonLogicTree } from 'react-awesome-query-builder';
import { QueryBuilderListToReplace } from '../types';
declare type getHumanReadableJsonLogicReturn = ReactNode;
export declare const useHumanReadableJsonLogic: (fields: Fields, listToReplace?: QueryBuilderListToReplace[] | undefined) => (logic?: Object | undefined) => getHumanReadableJsonLogicReturn;
export {};
