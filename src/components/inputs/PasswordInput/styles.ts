import { makeStyles } from '@mui/styles';

const styles = theme => ({
    displayPassword: {
        position: 'absolute',
        top: 6,
        right: theme.spacing(2),
    },
    passwordInput: {
        paddingRight: theme.spacing(8),
        minHeight: 56,
    },
});

// @ts-ignore
export const useStyles = makeStyles(styles);
