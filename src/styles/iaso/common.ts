import { CSSProperties } from '@mui/material/styles/createTypography';
import { Theme } from '@mui/material/styles';
import { mapStyles } from './map';
import {
    MENU_HEIGHT_WITH_TABS,
    MENU_HEIGHT_WITHOUT_TABS,
} from '../../constants/iaso/uiConstants';

export type CommonStyles = {
    // eslint-disable-next-line no-unused-vars
    (theme: Theme): {
        [key: string]: CSSProperties;
    };
};

export const commonStyles: CommonStyles = theme => ({
    ...mapStyles(theme),
    containerFullHeight: {
        width: '100%',
        height: `calc(100vh - ${MENU_HEIGHT_WITH_TABS}px)`,
        margin: 0,
        overflow: 'auto',
        backgroundColor: 'white',
    },
    containerFullHeightPadded: {
        width: '100%',
        height: `calc(100vh - ${MENU_HEIGHT_WITH_TABS}px)`,
        padding: theme.spacing(4),
        margin: 0,
        backgroundColor: 'white',
        overflow: 'auto',
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2),
        },
    },
    containerFullHeightNoTabPadded: {
        width: '100%',
        height: `calc(100vh - ${MENU_HEIGHT_WITHOUT_TABS}px)`,
        padding: theme.spacing(4),
        margin: 0,
        overflow: 'auto',
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2),
        },
    },
    indicator: {
        backgroundColor: 'white',
    },
    buttonIcon: {
        marginRight: theme.spacing(1),
        width: 15,
        height: 15,
    },
    smallButtonIcon: {
        marginRight: theme.spacing(1),
        width: 15,
        height: 15,
        position: 'relative',
        top: -1,
    },
    listitem: {
        width: 'auto',
        paddingLeft: theme.spacing(1),
    },
    marginY: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    marginBottom: {
        marginBottom: theme.spacing(2),
    },
    marginBottomBig: {
        marginBottom: theme.spacing(4),
    },
    paddingBottomBig: {
        marginBottom: theme.spacing(4),
    },
    marginLeft: {
        marginLeft: `${theme.spacing(2)} !important`,
    },
    marginRight: {
        marginRight: `${theme.spacing(2)} !important`,
    },
    marginTop: {
        marginTop: `${theme.spacing(2)} !important`,
    },
    marginTopBig: {
        marginTop: `${theme.spacing(4)} !important`,
    },
    justifyFlexEnd: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    floatRight: {
        float: 'right',
    },
    tabs: {
        padding: theme.spacing(0, 4),
    },
    textAlignLeft: {
        textAlign: 'left',
    },
    textAlignRight: {
        textAlign: 'right',
    },
    dividerMarginNeg: {
        margin: theme.spacing(0, -4, 0, -4),
    },
    containerMarginNeg: {
        margin: theme.spacing(0, -4, -4, -4),
        width: `calc(100% + ${theme.spacing(8)})`,
    },
    relativeContainer: {
        position: 'relative',
    },
    svgIcon: {
        width: 24,
        heigth: 24,
    },
    svgChipIcon: {
        width: 20,
        heigth: 20,
        padding: 4,
    },
    textError: {
        color: theme.palette.error.main,
        display: 'flex',
        alignItems: 'center',
    },
    popperFixed: {
        position: 'fixed',
    },
    iconButton: {
        padding: 0,
    },
    linkButton: {
        color: 'inherit',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.spacing(6),
        width: theme.spacing(6),
    },
    capitalize: {
        display: 'inline-block',
        '&:first-letter': {
            textTransform: 'uppercase',
        },
    },
});
