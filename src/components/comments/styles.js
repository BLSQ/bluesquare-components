import { makeStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../styles/iaso/common';

const styles = theme => ({
    ...commonStyles(theme),
    commentRoot: { padding: '20px 20px', marginBottom: '5px' },
    commentAuthor: { margin: 0, textAlign: 'left' },
    // commentText: { textAlign: 'justify' },
    commentPostingTime: {
        textAlign: 'end',
        color: theme.mediumGray?.main ?? '#A2A2A2',
    },
    commentGrid: { justifyContent: 'left' },
    replyToComment: { textAlign: 'end' },
    commentText: { display: 'inline-flex', textAlign: 'justify' },
    toggleCommentText: { alignSelf: 'end' },
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
