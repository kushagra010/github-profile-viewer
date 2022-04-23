import React from 'react';

import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { styles } from './style';

const NotFound = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Box sx={styles.root}>
            <Box sx={styles.page404Box}>
                <Typography sx={styles.page404} variant="h1">
                    4
                </Typography>
                <GitHubIcon sx={styles.githubIcon} />
                <Typography sx={styles.page404} variant="h1">
                    4
                </Typography>
            </Box>
            <Typography sx={styles.pageNotFound} variant="h2">
                {t('pageNotFound')}
            </Typography>
        </Box>
    );
};

export default NotFound;
