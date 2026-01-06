import { FunctionComponent } from 'react';
type Props = {
    uid?: string;
    label: string;
    keyValue: string;
    required?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    onEnterPressed: () => void;
    onChange: (newValue: string) => void;
    onErrorChange?: (hasError: boolean) => void;
    blockForbiddenChars?: boolean;
    value: string;
    errors?: string[];
    autoComplete?: string;
    dataTestId?: string;
};
declare const SearchInput: FunctionComponent<Props>;
export { SearchInput };
