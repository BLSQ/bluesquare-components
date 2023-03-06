import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    // TODO confirm if can safely be deleted
    icon: {
        right: theme.spacing(2),
    },
    // TODO confirm if can safely be deleted
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
    },
    inputInput: {
        paddingRight: theme.spacing(7),
        width: '100%',
    },
    searchIconWrapper: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));
