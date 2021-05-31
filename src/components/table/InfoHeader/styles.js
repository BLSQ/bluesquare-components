import { makeStyles } from '@material-ui/core';
import { commonStyles } from '../../../styles/iaso/common';

const styles = theme => ({
    ...commonStyles(theme),
    root: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
    },
    icon: {
        cursor: 'pointer',
        position: 'relative',
        top: -1,
    },
});

const useStyles = makeStyles(styles);

export { useStyles };
