import { lg, md, xs } from 'Src/constants/miscConstants';
import theme from 'Src/theme';

export const styles = {
    navbarContainer: {
        flexGrow: 1,
        width: '100%',
        mb: 3,
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.common.white,
    },
    icons: {
        height: '3rem',
        width: '3rem',
        [theme.breakpoints.down(lg)]: {
            height: '2rem',
            width: '2rem',
        },
    },
    logo: {
        [theme.breakpoints.up(xs)]: {
            mr: 1.5,
        },
        [theme.breakpoints.up(md)]: {
            mr: 0,
        },
    },
    loginBox: {
        [theme.breakpoints.down(md)]: {
            pr: 0,
        },
    },
    loginIcon: {
        mr: { xs: 0, md: 0.6 },
    },
    loginTypo: {
        display: { xs: 'none', md: 'block' },
    },
    midBox: {
        flexGrow: 1,
    },
    rightBox: {
        display: { xs: 'none', md: 'flex' },
    },
    logoutIcon: {
        mr: 0.6,
    },
    moreIconBox: {
        display: { xs: 'flex', md: 'none' },
    },
    moreIcon: {
        pr: 0,
    },
    dropDownArrowIcon: {
        height: '2rem',
        width: '2rem',
        [theme.breakpoints.down(lg)]: {
            height: '1rem',
            width: '1rem',
        },
    },
    languageMenu: {
        menuItem: {
            fontSize: '2rem',
            [theme.breakpoints.down(md)]: {
                fontSize: '1.5rem',
            },
        },
        languageIcon: {
            fontSize: '2rem',
            mr: 1,
            [theme.breakpoints.down(md)]: {
                fontSize: '1.5rem',
            },
        },
    },
};
