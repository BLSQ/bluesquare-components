export { InputLabelComponent as InputLabel };
/** @deprecated use InputLabel from @mui/material instead to avoid text alignment issues */
declare function InputLabelComponent({ htmlFor, label, required, shrink, error }: {
    htmlFor: any;
    label: any;
    required: any;
    shrink: any;
    error: any;
}): React.JSX.Element;
declare namespace InputLabelComponent {
    namespace defaultProps {
        let shrink: boolean;
        let error: boolean;
        let label: string;
    }
    namespace propTypes {
        export let htmlFor: PropTypes.Validator<string>;
        let label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        export let required: PropTypes.Validator<boolean>;
        let shrink_1: PropTypes.Requireable<boolean>;
        export { shrink_1 as shrink };
        let error_1: PropTypes.Requireable<boolean>;
        export { error_1 as error };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
