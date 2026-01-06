import { makeStyles } from '@mui/styles';

const styles = () => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//@ts-ignore
export const useStyles = makeStyles(styles);
