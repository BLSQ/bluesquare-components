import { makeStyles } from '@material-ui/core/styles';
import { styles as commentStyles } from '../Comment/styles';

const styles = {
    ...commentStyles,
};

const useStyles = makeStyles(styles);

export { styles, useStyles };
