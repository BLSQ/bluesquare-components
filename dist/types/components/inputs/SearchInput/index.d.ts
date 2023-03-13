import { FunctionComponent } from 'react';
declare type Props = {
    uid: string;
    label: string;
    keyValue: string;
    required?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    onEnterPressed: () => void;
    onChange: (newValue: string) => void;
    onErrorChange?: (hasError: boolean) => void;
    blockForbiddenChars: boolean;
    value: string;
    errors: [];
    autoComplete: string;
};
declare const SearchInput: FunctionComponent<Props>;
export { SearchInput };
