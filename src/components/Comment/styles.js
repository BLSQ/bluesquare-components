import { makeStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../styles/iaso/common';

const styles = theme => ({
    ...commonStyles(theme),
    commentRoot: { padding: '20px 20px', marginBottom:'5px' },
    commentAuthor: { margin: 0, textAlign: 'left' },
    commentText: { textAlign: 'justify' },
    commentPostingTime: { textAlign: 'left', color: theme.ligthGray },
    commentGrid: { justifyContent: 'left' },
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
