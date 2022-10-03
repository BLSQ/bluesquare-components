import React, { FunctionComponent, useState, useMemo } from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { JsonLogicTree } from 'react-awesome-query-builder';
import classNames from 'classnames';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { FormControl } from '../../inputs/FormControl';
import { MESSAGES } from '../messages';

const styles = theme => ({
    textArea: {
        width: '100%',
        minWidth: '100%',
        minHeight: '100px',
        padding: theme.spacing(2),
        outline: 'none',
    },
    textAreaError: {
        borderColor: `${theme.palette.error.main} !important`,
    },
});

// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
    initialLogic?: JsonLogicTree;
    // eslint-disable-next-line no-unused-vars
    changeLogic: (newLogic: JsonLogicTree) => void;
};

export const JsonLogicEditor: FunctionComponent<Props> = ({
    initialLogic,
    changeLogic,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes: Record<string, string> = useStyles();
    const [logic, setLogic] = useState<string>(JSON.stringify(initialLogic));
    const [errors, setErrors] = useState<Array<string>>([]);

    const handleChange = e => {
        const { value } = e.target;
        setLogic(value);
        try {
            JSON.parse(value);
            setErrors([]);
        } catch {
            setErrors([formatMessage(MESSAGES.invalidJson)]);
        }
    };

    return (
        <Box mt={2} mb={-2}>
            <FormControl errors={errors}>
                <textarea
                    className={classNames(
                        classes.textArea,
                        errors.length > 0 && classes.textAreaError,
                    )}
                    onChange={handleChange}
                    value={logic}
                />
            </FormControl>
            <Box mt={2} display="flex" justifyContent="flex-end">
                <Button
                    disabled={
                        !logic ||
                        errors.length > 0 ||
                        logic === JSON.stringify(initialLogic)
                    }
                    onClick={() => logic && changeLogic(JSON.parse(logic))}
                    color="primary"
                    data-test="apply-button"
                >
                    {formatMessage(MESSAGES.apply)}
                </Button>
            </Box>
        </Box>
    );
};
