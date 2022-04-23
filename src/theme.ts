import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0052D4',
            light: '#9CECFB',
            dark: '#65C7F7',
        },
        common: {
            white: '#fff',
            black: '#000',
        },
        grey: {
            500: '#ebebeb',
            600: '#d5d5d5',
            700: '#a5a5a5',
        },
    },
    breakpoints: {
        values: {
            xs: 200,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1440,
        },
    },
    spacing: 10,
});

export default theme;
