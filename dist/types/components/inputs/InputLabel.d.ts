export { InputLabelComponent as InputLabel };
/** @deprecated use InputLabel from @mui/material instead to avoid text alignment issues */
declare function InputLabelComponent({ htmlFor, label, required, shrink, error }: {
    htmlFor: any;
    label?: string | undefined;
    required: any;
    shrink?: boolean | undefined;
    error?: boolean | undefined;
}): React.JSX.Element;
declare namespace InputLabelComponent {
    namespace propTypes {
        let htmlFor: PropTypes.Validator<string>;
        let label: PropTypes.Requireable<string>;
        let required: PropTypes.Validator<boolean>;
        let shrink: PropTypes.Requireable<boolean>;
        let error: PropTypes.Requireable<boolean>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
