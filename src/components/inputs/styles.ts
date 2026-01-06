import { makeStyles } from '@mui/styles';

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
    popupIndicator: {
        marginRight: '6px !important',
        marginLeft: '6px !important',
    },
    clearIndicator: {
        marginTop: -2,
    },
    hasClearIcon: {
        '& .MuiAutocomplete-inputRoot': {
            paddingRight: '85px !important',
        },
    },
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
