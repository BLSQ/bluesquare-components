import { makeStyles } from '@material-ui/core/styles';

const styles = theme => ({
    inputLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
        paddingLeft: 3,
        paddingRight: 3,
        transition: theme.transitions.create(['all'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    shrink: {
        fontSize: 20,
        marginTop: -2,
        backgroundColor: 'white',
    },
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
