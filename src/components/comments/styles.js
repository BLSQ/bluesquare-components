import { makeStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../styles/iaso/common.ts';

const styles = theme => ({
    ...commonStyles(theme),
    commentRoot: { padding: '10px 20px', margin: '0px 5px 5px 5px' },
    commentAuthor: { margin: 0, textAlign: 'left' },
    commentPostingTime: {
        textAlign: 'end',
        color: theme.mediumGray?.main ?? '#A2A2A2',
    },
    commentGrid: { justifyContent: 'left', padding: '0px 10px' },
    replyToComment: { textAlign: 'end' },
    commentText: {
        textAlign: 'justify',
        marginTop: '10px',
    },
    toggleCommentText: {
        alignSelf: 'end',
        cursor: 'default',
        color: '#3f51b5',
        '&:hover': { textDecoration: 'underline' },
    },
    expandThread: {
        textAlign: 'end',
    },
    button: {
        backgroundColor: '#fff',
        color: '#3f51b5',
    },
    childComment: {
        paddingLeft: '20px',
    },
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
