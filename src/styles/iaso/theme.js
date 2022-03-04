import { createTheme } from '@material-ui/core/styles';

const rawTheme = {
    typography: {
        useNextVariants: true,
    },
    textColor: '#333',
    palette: {
        primary: {
            main: '#006699',
            secondary: '#0066cc',
            background: '#ffffff',
        },
        gray: {
            main: '#666',
            border: 'rgba(0,0,0,0.02)',
            background: 'rgba(0,0,0,0.03)',
        },
        mediumGray: {
            main: '#A2A2A2',
        },
        ligthGray: {
            main: '#F7F7F7',
            border: 'rgba(0, 0, 0, 0.12)',
            background: 'rgba(0, 0, 0, 0.012)',
        },
        error: {
            main: 'rgb(215, 25, 28)',
            background: 'rgba(215, 25, 28, 0.2)',
            backgroundHard: 'rgba(215, 25, 28, 0.7)',
        },
        success: {
            main: '#4caf50',
            background: 'rgba(#4caf50, 0.2)',
        },
    },
};

const theme = createTheme(rawTheme);

export { theme, rawTheme };
