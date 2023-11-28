import { makeStyles } from '@material-ui/core';
import { commonStyles } from '../../../styles/iaso/common.ts';

const styles = theme => ({
    ...commonStyles(theme),
    icon: {
        cursor: 'pointer',
        position: 'relative',
        top: -1,
    },
});

const useStyles = makeStyles(styles);

export { useStyles };
