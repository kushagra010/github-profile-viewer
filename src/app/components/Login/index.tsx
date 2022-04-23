import React, { ChangeEvent, useState } from 'react';

import { useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/system';
import { Alert, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LockIcon from '@mui/icons-material/Lock';

import Button from 'Components/Buttons/index';
import Input from 'Components/Inputs/index';
import { RootState, IUserCredentials } from 'Constants/types';
import { enterKey } from 'Src/constants/miscConstants';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface ILoginComponentProps {
    handleCallback: (arg0: IUserCredentials) => void;
}

const LoginComponent = ({
    handleCallback,
}: ILoginComponentProps): JSX.Element => {
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState('');
    const { t } = useTranslation();
    const userAuth = useSelector((state: RootState) => state.userAuth);

    const handleUserName = (event: ChangeEvent<HTMLInputElement>): void => {
        setUserName(event.target.value);
    };

    const handleToken = (event: ChangeEvent<HTMLInputElement>): void => {
        setToken(event.target.value);
    };

    const handleLogin = (): void => {
        handleCallback({
            userName,
            token,
        });
    };

    const sendData = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (userName && token && event.key === enterKey) {
            handleLogin();
        }
    };

    return (
        <Box sx={styles.login}>
            <Box sx={styles.loginCard}>
                <Box sx={styles.header}>
                    <GitHubIcon sx={styles.githubIcon} />
                    <Typography variant="h2">
                        {t('loginPage.signIn')}
                    </Typography>
                </Box>
                <Box sx={styles.wrapper}>
                    <Input
                        label={t('loginPage.userName')}
                        variant="outlined"
                        value={userName}
                        onChange={handleUserName}
                        fullWidth
                        autoFocus
                        disabled={userAuth.loading}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Input
                        label={t('loginPage.token')}
                        variant="outlined"
                        type="password"
                        value={token}
                        fullWidth
                        disabled={userAuth.loading}
                        onChange={handleToken}
                        onKeyPress={sendData}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Button
                    disabled={
                        userAuth.loading || userName === '' || token === ''
                    }
                    size="large"
                    onClick={handleLogin}
                    fullWidth
                >
                    {t('login')}
                </Button>
                {userAuth.errorMsg ? (
                    <Alert sx={styles.alert} severity="error">
                        {userAuth.errorMsg}
                    </Alert>
                ) : (
                    <></>
                )}
            </Box>
        </Box>
    );
};

export default LoginComponent;
