import { makeStyles } from '@material-ui/core/styles';
import { styles as commentStyles } from '../Comment/styles';
// import { commonStyles } from '../../styles/iaso/common';

const styles = theme => ({
    ...commentStyles(theme),
    // commentRoot: { padding: '20px 20px', marginBottom: '5px' },
    // commentAuthor: { margin: 0, textAlign: 'left' },
    // commentText: { textAlign: 'justify' },
    // commentPostingTime: { textAlign: 'left', color: theme.ligthGray },
    // commentGrid: { justifyContent: 'left' },
    // black: { color: 'black' },
    // blue: { color: 'blue' },
    // red: { color: 'red' },
    // green: { color: 'green' },
    // yellow: { color: 'yellow' },
    // purple: { color: 'purple' },
    // amber: { color: 'amber' },
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
