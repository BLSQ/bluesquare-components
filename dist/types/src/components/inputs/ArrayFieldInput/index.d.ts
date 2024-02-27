export { styledArrayFieldInput as ArrayFieldInput };
declare const styledArrayFieldInput: React.JSXElementConstructor<Omit<Pick<PropTypes.InferProps<{
    fieldList: PropTypes.Requireable<any[]>;
    baseId: PropTypes.Validator<string>;
    updateList: PropTypes.Validator<(...args: any[]) => any>;
    classes: PropTypes.Validator<object>;
    label: PropTypes.Requireable<string>;
    autoComplete: PropTypes.Requireable<string>;
}>, PropTypes.RequiredKeys<{
    fieldList: PropTypes.Requireable<any[]>;
    baseId: PropTypes.Validator<string>;
    updateList: PropTypes.Validator<(...args: any[]) => any>;
    classes: PropTypes.Validator<object>;
    label: PropTypes.Requireable<string>;
    autoComplete: PropTypes.Requireable<string>;
}>> & {
    label?: string | null | undefined;
    autoComplete?: string | null | undefined;
    fieldList?: any[] | null | undefined;
} & {}, "classes"> & import("@mui/styles").StyledComponentProps<string> & object>;
import PropTypes from "prop-types";
import React from "react";
