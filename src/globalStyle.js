import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#039be5',
            main: '#1e88e5',
            dark: '#1e88e5',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        ternary: {
            light: '#c0ca33',
            main: '#7cb342',
            dark: '#00897b',
            contrastText: '#000',
        }
    },
});