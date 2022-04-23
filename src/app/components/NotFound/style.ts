import { md, sm } from 'Src/constants/miscConstants';
import theme from 'Src/theme';

export const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    } as const,
    page404Box: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    page404: {
        color: theme.palette.warning.dark,
        fontSize: '20rem',
        [theme.breakpoints.down(md)]: {
            fontSize: '15rem',
        },
        [theme.breakpoints.down(sm)]: {
            fontSize: '13rem',
        },
    },
    githubIcon: {
        fontSize: '15rem',
        mx: 2,
        [theme.breakpoints.down(md)]: {
            fontSize: '10rem',
        },
        [theme.breakpoints.down(sm)]: {
            fontSize: '8rem',
        },
    },
    pageNotFound: {
        fontWeight: 'bold',
        textAlign: 'center',
    } as const,
};
