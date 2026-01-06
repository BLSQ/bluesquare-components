import React, { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    placeholder: {
        height: 15,
        //@ts-ignore
        backgroundColor: theme.palette.ligthGray.main,
        borderRadius: 5,
        marginRight: theme.spacing(1),
        width: '50%',
    },
}));

type Props = { width?: string };
export const BlockPlaceholder: FunctionComponent<Props> = ({
    width = '50%',
}) => {
    const classes = useStyles();
    return (
        <div
            className={classes.placeholder}
            style={{
                width,
            }}
        />
    );
};
