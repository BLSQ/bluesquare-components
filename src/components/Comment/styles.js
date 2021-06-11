import { makeStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../styles/iaso/common';

const styles = theme => ({
    ...commonStyles(theme),
    commentRoot: { padding: '40px 20px' },
    commentAuthor: { margin: 0, textAlign: 'left' },
    commentText: { textAlign: 'justify' },
    commentPostingTime: { textAlign: 'left', color: theme.lightGray },
    commentGrid: { justifyContent: 'left' },
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
