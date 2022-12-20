import { ReactNode } from 'react';
import { Fields, JsonLogicTree } from 'react-awesome-query-builder';
import { QueryBuilderListToReplace } from '../types';
export declare const useHumanReadableJsonLogic: (fields: Fields, listToReplace?: QueryBuilderListToReplace[] | undefined) => (logic?: Object | undefined) => ReactNode;
