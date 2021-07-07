import { fade } from '@material-ui/core/styles/colorManipulator';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    select: {
        '& .is-disabled  .Select-control': {
            borderColor: `${grey['300']} !important`,
            cursor: 'not-allowed',
        },
        '&:hover .is-disabled  .Select-control': {
            borderColor: `${grey['300']} !important`,
        },
        '& .is-pseudo-focused .Select-control': {
            borderColor: `${theme.palette.primary.main}  !important`,
        },
        '& .is-focused .Select-control': {
            borderColor: `${theme.palette.primary.main}  !important`,
        },
        '& .is-open .Select-control': {
            borderColor: `${theme.palette.primary.main}  !important`,
            overflow: 'hidden',
        },
        '&:hover .Select-control': {
            borderColor: `${theme.palette.primary.main}  !important`,
        },
        '& .is-open .Select-menu-outer': {
            borderLeftColor: theme.palette.primary.main,
            borderBottomColor: theme.palette.primary.main,
            borderRightColor: theme.palette.primary.main,
            fontSize: 14,
        },
        '& .Select-menu': {
            borderRadius: '4px',
            marginRight: '1px',
        },
        '& .Select-control': {
            boxShadow: 'none  !important',
        },
        '& .Select--multi .Select-value': {
            height: theme.spacing(4),
            display: 'inline-block !important',
            padding: '0 !important',
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            backgroundColor: fade(theme.palette.secondary.main, 0.08),
        },
        '& .Select--multi .Select-value .Select-value-icon': {
            borderColor: fade(theme.palette.secondary.main, 0.24),
            width: '21px',
            height: '100%',
            paddingTop: '3px',
        },
        '& .Select--multi .Select-value .select-color': {
            display: 'inline-block',
            width: theme.spacing(2),
            height: theme.spacing(2),
            borderRadius: theme.spacing(2),
            marginRight: theme.spacing(1),
            position: 'relative',
            top: 3,
        },
        '& .Select--multi .Select-multi-value-wrapper': {
            width: '97%',
            position: 'relative',
            top: 5,
        },
        '& .Select--multi .Select-input': {
            position: 'relative',
            top: -5,
            paddingLeft: `${theme.spacing(1)}px !important`,
        },
        '& .Select--multi .Select-value-label': {
            height: '27px',
            width: 'auto',
            maxWidth: '92%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
    },
    selectError: {
        '& .Select-control': {
            borderColor: `${theme.palette.error.main} !important`,
        },
        '& .is-focused .Select-control': {
            borderColor: `${theme.palette.error.main}  !important`,
        },
        '& .is-open .Select-control': {
            borderColor: `${theme.palette.error.main}  !important`,
            overflow: 'hidden',
        },
        '&:hover .Select-control': {
            borderColor: `${theme.palette.error.main}  !important`,
        },
        '& .is-open .Select-menu-outer': {
            borderLeftColor: theme.palette.error.main,
            borderBottomColor: theme.palette.error.main,
            borderRightColor: theme.palette.error.main,
        },
    },
});

export { styles };
