import { makeStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../../styles/iaso/common.ts';

const styles = theme => ({
    ...commonStyles(theme),
    textAreaContainer: {
        width: '100%',
        marginTop: '20px',
    },
    textArea: {
        width: '100%',
        borderRadius: '6px',
        borderColor: '#A2A2A2',
        padding: '8px',
        resize: 'vertical',
    },
    left: { textAlign: 'left' },
    right: { textAlign: 'right' },
    center: { textAlign: 'center' },
    commentConfirmButton: {
        marginBottom: '20px',
        marginLeft: 'auto',
    },
    button: {
        color: '#fff',
        backgroundColor: '#3f51b5',
    },
});
const useStyles = makeStyles(styles);

export { styles, useStyles };
