import { makeStyles } from '@material-ui/core/styles';
import { styles as commentStyles } from '../styles';

const styles = theme => ({
    ...commentStyles(theme),
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
