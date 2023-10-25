import { makeStyles } from '@mui/styles';
import { commonStyles } from '../../../styles/iaso/common';

export const useStyles = makeStyles(theme => ({
    tabs: {
        ...commonStyles(theme).tabs,
        paddingRight: 0,
        '& .MuiTab-wrapper': {
            flexDirection: 'row-reverse',
        },
    },
    indicator: {
        backgroundColor: 'white',
    },
    mainContainer: {
        display: 'flex',
        position: 'relative',
    },
    tabsContainer: {
        maxWidth: '95vw',
    },
    iconButton: {
        color: 'white !important',
        height: 30,
        position: 'relative',
        top: 21,
    },
    removeIconButton: {
        color: 'white !important',
        height: 30,
        width: 30,
        borderRadius: 30,
        position: 'relative',
        marginBottom: ' 0 !important',
        display: 'flex',
        top: -1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing(1),
        '& svg': {
            width: 14,
            height: 14,
        },
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
        },
    },
    roundColor: {
        display: 'inline-block',
        width: 15,
        height: 15,
        borderRadius: 15,
        position: 'relative',
        top: -1,
        marginRight: theme.spacing(1),
    },
    tabContent: {
        height: 30,
        display: 'flex',
        alignItems: 'center',
        marginBottom: ' 0 !important',
    },
}));
