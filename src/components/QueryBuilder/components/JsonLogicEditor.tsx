import React, { FunctionComponent, useState } from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { JsonLogicTree } from 'react-awesome-query-builder';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from '../messages';

const styles = theme => ({
    textArea: {
        width: '100%',
        minWidth: '100%',
        minHeight: '100px',
        padding: theme.spacing(2),
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
    const [logic, setLogic] = useState<JsonLogicTree | undefined>(initialLogic);
    return (
        <Box mt={2} mb={-2}>
            <textarea
                className={classes.textArea}
                onChange={e => {
                    setLogic(JSON.parse(e.target.value));
                }}
                value={JSON.stringify(logic)}
            />
            <Box mt={2} display="flex" justifyContent="flex-end">
                <Button
                    disabled={!logic}
                    onClick={() => logic && changeLogic(logic)}
                    color="primary"
                    data-test="apply-button"
                >
                    {formatMessage(MESSAGES.apply)}
                </Button>
            </Box>
        </Box>
    );
};
