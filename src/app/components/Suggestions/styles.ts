import { md, sm } from 'Src/constants/miscConstants';
import theme from 'Src/theme';

export const styles = {
    suggestions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as const,
    suggestionsHeader: {
        display: 'flex',
        alignItems: 'center',
        mb: 2,
        fontWeight: 'bold',
        [theme.breakpoints.down(sm)]: {
            fontSize: '3rem',
        },
    },
    replayIcon: {
        fontSize: '3rem',
        ml: 3,
        '&:hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down(sm)]: {
            ml: 1,
            fontSize: '2rem',
        },
    },
    cardWrapper: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '2rem',
        m: '0 auto 2rem',
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[600],
    },
    cardContent: {
        backgroundColor: theme.palette.grey[500],
        display: 'flex',
        alignItems: 'center',
        width: '24rem',
        p: '1.6rem !important',
        [theme.breakpoints.up(sm)]: {
            width: '34.5rem',
        },
        [theme.breakpoints.up(md)]: {
            width: '68.8rem',
            p: '2rem !important',
        },
    },
    typography: {
        wordBreak: 'break-word',
    } as const,
    avatar: {
        mr: 1,
        height: '6rem',
        width: '6rem',
        [theme.breakpoints.up(md)]: {
            height: '8rem',
            width: '8rem',
            mr: 3,
        },
    },
    cardActions: {
        py: 0,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    closeIcon: {
        [theme.breakpoints.up(sm)]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up(md)]: {
            fontSize: '2.5rem',
        },
    },
};
