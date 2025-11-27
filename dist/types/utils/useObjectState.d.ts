import { Dispatch } from 'react';
export declare const recursiveReducer: (state: any, fieldDict: any) => Record<string, any>;
/** Use and modify an object (dictionnary) state in the same fashion as the class components of old:
 * Example:
 * const [state, setState] = useObjectState(initialState)
 * setState({name: "Bond"})
 * You can update nested objects as well, but it's not type safe in the sense that you can add fields to the state
 * that didn't previously exist
 */
export declare const useObjectState: (initialState?: Record<string, any>) => [any, Dispatch<any>];
