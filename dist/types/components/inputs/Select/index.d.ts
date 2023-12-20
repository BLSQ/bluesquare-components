declare function SelectCustom(props: any): React.JSX.Element;
declare namespace SelectCustom {
    namespace defaultProps {
        const multi: boolean;
        const value: undefined;
        const errors: never[];
        const label: undefined;
        const disabled: boolean;
        const clearable: boolean;
        const required: boolean;
        const loading: boolean;
        const options: never[];
        function onBlur(): void;
        const getOptionSelected: null;
        const getOptionLabel: null;
        const renderOption: null;
        const noOptionsText: {
            id: string;
            defaultMessage: string;
        };
        const loadingText: {
            id: string;
            defaultMessage: string;
        };
        const helperText: undefined;
        const renderTags: (tagValue: any, getTagProps: any) => any;
        const returnFullObject: boolean;
        const placeholder: undefined;
    }
    namespace propTypes {
        const multi_1: PropTypes.Requireable<boolean>;
        export { multi_1 as multi };
        const errors_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { errors_1 as errors };
        export const keyValue: PropTypes.Validator<string>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const clearable_1: PropTypes.Requireable<boolean>;
        export { clearable_1 as clearable };
        const value_1: PropTypes.Requireable<any>;
        export { value_1 as value };
        const onBlur_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onBlur_1 as onBlur };
        const loadingText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { loadingText_1 as loadingText };
        const noOptionsText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { noOptionsText_1 as noOptionsText };
        const helperText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { helperText_1 as helperText };
        const options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        const loading_1: PropTypes.Requireable<boolean>;
        export { loading_1 as loading };
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const getOptionLabel_1: PropTypes.Requireable<object>;
        export { getOptionLabel_1 as getOptionLabel };
        const getOptionSelected_1: PropTypes.Requireable<object>;
        export { getOptionSelected_1 as getOptionSelected };
        const renderOption_1: PropTypes.Requireable<object>;
        export { renderOption_1 as renderOption };
        const renderTags_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { renderTags_1 as renderTags };
        const returnFullObject_1: PropTypes.Requireable<boolean>;
        export { returnFullObject_1 as returnFullObject };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
    }
}
import { defaultRenderTags } from "./utils";
import React from "react";
import PropTypes from "prop-types";
export { SelectCustom as Select, defaultRenderTags as renderTags };
