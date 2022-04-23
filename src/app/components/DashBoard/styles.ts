import theme from 'Src/theme';
import { xs, md, lg, xl, sm } from 'Constants/miscConstants';

const styles = {
    dashBoard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as const,
    card: {
        background: theme.palette.common.white,
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: `0 0 6rem 0 ${theme.palette.grey[700]}`,
    },
    header: {
        background: `${theme.palette.primary.light} linear-gradient( to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark},  ${theme.palette.primary.light})`,
        height: '13rem',
    },
    body: {
        display: 'flex',
        [theme.breakpoints.up(xs)]: {
            flexDirection: 'column',
            p: theme.spacing(0, 1),
        },
        [theme.breakpoints.up(md)]: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            p: theme.spacing(0, 3),
        },
    },
    leftBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateY(-9rem)',
        [theme.breakpoints.up(md)]: {
            mr: 3.36,
        },
    } as const,
    avatarBox: {
        borderRadius: '50%',
        border: `0.7rem solid ${theme.palette.common.white}`,
    },
    userBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.grey[600]}`,
        pb: 1.8,
    } as const,
    user: {
        m: theme.spacing(0, 0, 1),
        [theme.breakpoints.up(xs)]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.up(md)]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up(lg)]: {
            fontSize: '3rem',
        },
    },
    userName: {
        fontSize: '1.5rem',
        m: 0,
        color: theme.palette.grey[700],
        transition: '0.5s',
        [theme.breakpoints.up(lg)]: {
            fontSize: '1.6rem',
        },
        [theme.breakpoints.up(xl)]: {
            fontSize: '1.8rem',
        },
    },
    userInfoBox: {
        mt: 1.8,
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.3rem',
        [theme.breakpoints.up(xs)]: {
            maxWidth: '23rem',
        },
        [theme.breakpoints.up(md)]: {
            maxWidth: '16rem',
        },
        [theme.breakpoints.up(lg)]: {
            fontSize: '1.5rem',
            maxWidth: '24.2rem',
        },
        '& p': {
            m: 0,
        },
    } as const,
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        '&:not(:last-child)': {
            mb: 1.2,
        },
    },
    noUserInfo: {
        textAlign: 'center',
    } as const,
    typography: {
        fontSize: 'inherit',
    },
    userInfoLink: {
        color: theme.palette.common.black,
    },
    rightBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '63rem',
        mt: 3,
        [theme.breakpoints.down(md)]: {
            transform: 'translateY(-9rem)',
        },
    } as const,
    followBox: {
        display: 'flex',
        fontSize: '2rem',
        '& > :first-of-type': {
            mr: 9,
        },
        [theme.breakpoints.down(md)]: {
            '& > :first-of-type': {
                mr: 2,
            },
        },
    },
    follow: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5rem',
        alignItems: 'center',
        p: 0.8,
        '& b': {
            fontSize: '3rem',
        },
        /** TODO: will add the following css when adding the
         * functionality of showing the list of followers of a user
         */
        // '&:hover': {
        //     background: theme.palette.grey[500],
        //     cursor: 'pointer',
        // },
    } as const,
    bioBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
        [theme.breakpoints.up(md)]: {
            minWidth: '46.6rem',
            borderLeft: `1px solid ${theme.palette.grey[600]}`,
            mt: 2.5,
            p: theme.spacing(0, 2, 2),
        },
        [theme.breakpoints.up(sm)]: {
            minWidth: '40.5rem',
        },
        [theme.breakpoints.up(xs)]: {
            minWidth: '30rem',
        },
    } as const,
    bio: {
        fontSize: '1.7rem',
        textAlign: 'center',
        pb: 1,
        borderBottom: `1px solid ${theme.palette.grey[600]}`,
        [theme.breakpoints.up(xl)]: {
            fontSize: '2rem',
        },
    } as const,
    bioTypo: {
        my: 1.5,
    },
    externalLinkBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        mt: 2,
    } as const,
    button: {
        fontSize: '1.6rem',
        p: 1,
        borderRadius: '0.5rem',
        fontWeight: '600',
    },
    profileBtn: {
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        minWidth: '11.35rem',
        textAlign: 'center',
        '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
    } as const,
    portfolioBtn: {
        border: `2px solid ${theme.palette.primary.main}`,
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        minWidth: '11.35rem',
        textAlign: 'center',
        '&:hover': {
            background: theme.palette.common.white,
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
        },
    } as const,
    avatar: {
        height: '15rem',
        width: '15rem',
        fontSize: '4rem',
    },
    icon: {
        fontSize: '1.8rem',
        mr: 0.5,
    },
};

export default styles;
