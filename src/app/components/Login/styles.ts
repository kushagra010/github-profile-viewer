import theme from 'Src/theme';

const styles = {
    login: {
        display: 'flex',
    },
    loginCard: {
        boxShadow: `0 0 10rem 0 ${theme.palette.grey[700]}`,
        width: '36rem',
        minHeight: '40rem',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        maxHeight: '80rem',
        p: 3,
        borderRadius: '2rem',
    } as const,
    header: {
        mb: 1.5,
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :first-of-type': {
            mr: 1,
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        m: '2.5rem 0',
        '& > :first-of-type': {
            mb: 2,
        },
    } as const,
    githubIcon: {
        fontSize: '2.5rem',
    },
    alert: {
        fontSize: '1.5rem',
        py: 0,
        mt: 2.5,
    },
};

export default styles;
