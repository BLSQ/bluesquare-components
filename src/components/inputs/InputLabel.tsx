import React, { FunctionComponent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { useStyles } from './styles';

type Props = {
    htmlFor: string;
    required: boolean;
    label?: string;
    shrink?: boolean;
    error?: boolean;
};

/** @deprecated use InputLabel from @mui/material instead to avoid text alignment issues */
const InputLabelComponent: FunctionComponent<Props> = ({
    htmlFor,
    label = '',
    required,
    shrink = true,
    error = false,
}) => {
    const classes = useStyles();
    return (
        // @ts-ignore
        <InputLabel
            name={htmlFor.replace('input-text-', '')}
            htmlFor={htmlFor}
            classes={{
                shrink: classes.shrink,
            }}
            className={classes.inputLabel}
            shrink={shrink}
            error={error}
        >
            {label}
            {required && <sup> *</sup>}
        </InputLabel>
    );
};

export { InputLabelComponent as InputLabel };
