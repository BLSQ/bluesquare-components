import { makeStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../../styles/iaso/common';

const styles = theme => ({
    ...commonStyles(theme),
    commentRoot: { padding: '20px 20px', marginBottom: '5px' },
    commentAuthor: { margin: 0, textAlign: 'left' },
    commentText: { textAlign: 'justify' },
    commentPostingTime: {
        textAlign: 'right',
        color: theme.mediumGray?.main ?? '#A2A2A2',
    },
    commentGrid: { justifyContent: 'left' },
    replyToComment: { textAlign: 'end' },
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
