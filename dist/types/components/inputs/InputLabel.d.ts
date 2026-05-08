import { FunctionComponent } from 'react';
type Props = {
    htmlFor: string;
    required: boolean;
    label?: string;
    shrink?: boolean;
    error?: boolean;
};
/** @deprecated use InputLabel from @mui/material instead to avoid text alignment issues */
<<<<<<< HEAD
declare const InputLabelComponent: FunctionComponent<Props>;
export { InputLabelComponent as InputLabel };
=======
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
>>>>>>> main
