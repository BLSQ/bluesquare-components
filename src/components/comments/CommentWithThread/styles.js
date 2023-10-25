import { makeStyles } from '@mui/styles';
import { styles as commentStyles } from '../styles';

const styles = theme => ({
    ...commentStyles(theme),
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
