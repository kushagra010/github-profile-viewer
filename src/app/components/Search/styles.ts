import { alpha } from '@mui/material';

import theme from 'Src/theme';
import { lg, md, sm } from 'Src/constants/miscConstants';

export const styles = {
    searchDiv: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.3),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.4),
        },
        m: 0,
        width: '100%',
        [theme.breakpoints.up(sm)]: {
            width: '30rem',
        },
        [theme.breakpoints.up(md)]: {
            width: 'auto',
            ml: 1,
        },
        [theme.breakpoints.up(lg)]: {
            ml: 3,
        },
    } as const,
    searchIconWrapper: {
        p: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as const,
    searchIcon: {
        height: '2rem',
        width: '2rem',
        fontSize: '2rem',
    },
    styledInputBase: {
        color: 'inherit',
        '& #free-solo': {
            p: theme.spacing(0.7, 1, 0.7, 0),
            pl: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            fontSize: '1.5rem',
            height: '2.5rem',
            width: '25rem',
            [theme.breakpoints.down(lg)]: {
                width: '22rem',
            },
            [theme.breakpoints.down(sm)]: {
                width: '100%',
            },
        },
        '& .MuiAutocomplete-endAdornment': {
            right: '0.5rem',
            top: 'calc(50% - 1rem)',
        },
    },
    avatar: {
        mr: 2,
    },
    paper: {
        boxShadow: `0 0.2rem 1rem 0 ${theme.palette.grey[700]}`,
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    autoCompleteOption: {
        color: theme.palette.common.black,
    },
};
