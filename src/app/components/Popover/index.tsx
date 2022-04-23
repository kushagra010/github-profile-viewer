import React, { useCallback } from 'react';

import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BoltIcon from '@mui/icons-material/Bolt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LanguageIcon from '@mui/icons-material/Language';

import { mobileMenuIdConstant } from 'Src/constants/miscConstants';
import Links from 'Components/LinksOrAnchor';
import { suggestionsPath } from 'Src/constants/routeConstants';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface IPopoverProps {
    handleLangMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCallback: () => void;
    mobileMoreAnchorEl: null | HTMLElement;
    setMobileMoreAnchorEl: (arg0: null | HTMLElement) => void;
}

const Popover = ({
    handleLangMenu,
    handleCallback,
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
}: IPopoverProps): JSX.Element => {
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { t } = useTranslation();

    const handleMobileMenuClose = useCallback(() => {
        setMobileMoreAnchorEl(null);
    }, [setMobileMoreAnchorEl]);

    const handleLogout = (): void => {
        handleCallback();
        handleMobileMenuClose();
    };

    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuIdConstant}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMobileMenuClose} sx={styles.menuItem}>
                <Links
                    className="navbar-mobile-link"
                    isLink
                    url={suggestionsPath}
                >
                    <IconButton
                        size="large"
                        aria-label="suggestions"
                        color="inherit"
                    >
                        <BoltIcon sx={styles.icons} />
                    </IconButton>
                    <Typography sx={styles.typography} variant="body2">
                        {t('suggestions')}
                    </Typography>
                </Links>
            </MenuItem>
            <MenuItem sx={styles.menuItem} onClick={handleLogout}>
                <IconButton size="large" color="inherit">
                    <ExitToAppIcon sx={styles.icons} />
                </IconButton>
                <Typography
                    sx={{ ...styles.typography, ...styles.logoutTypo }}
                    variant="body2"
                >
                    {t('logout')}
                </Typography>
            </MenuItem>
            <MenuItem sx={styles.menuItem} onClick={handleLangMenu}>
                <IconButton size="large" color="inherit">
                    <LanguageIcon sx={styles.icons} />
                </IconButton>
                <Typography
                    sx={{ ...styles.typography, ...styles.langTypo }}
                    variant="body2"
                >
                    {t('language')}
                </Typography>
            </MenuItem>
        </Menu>
    );
};

export default Popover;
