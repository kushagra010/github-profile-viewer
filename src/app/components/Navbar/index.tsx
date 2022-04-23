import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import BoltIcon from '@mui/icons-material/Bolt';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MoreIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem, Typography } from '@mui/material';

import {
    dashboardPath,
    loginPath,
    suggestionsPath,
} from 'Constants/routeConstants';
import Links from 'Components/LinksOrAnchor/index';
import SearchComponent from 'Components/Search';
import { mobileMenuIdConstant } from 'Src/constants/miscConstants';
import Popover from 'Components/Popover';
import { useTranslation } from 'react-i18next';
import { styles } from './style';

interface INavbarProps {
    handleCallback: () => void;
    isAuthenticated: boolean;
}

const Navbar = ({
    handleCallback,
    isAuthenticated,
}: INavbarProps): JSX.Element => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const { t, i18n } = useTranslation();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const handleLogout = (): void => {
        handleCallback();
    };

    const [langMenuanchorEl, setlangMenuAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const openLangMenu = Boolean(langMenuanchorEl);

    const handleLangMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setlangMenuAnchorEl(event.currentTarget);
    };

    const handleLangMenuClose = (): void => {
        setlangMenuAnchorEl(null);
    };

    const handleLanguage = (lang: string): void => {
        i18n.changeLanguage(lang);
    };

    const handleMobileMenuOpen = (): void => {
        setMobileMoreAnchorEl(divRef.current);
    };

    const renderMobileMenu = (
        <Popover
            handleLangMenu={handleLangMenu}
            handleCallback={handleCallback}
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            setMobileMoreAnchorEl={setMobileMoreAnchorEl}
        />
    );

    return (
        <Box sx={styles.navbarContainer}>
            <AppBar position="static">
                <Toolbar>
                    <Links
                        customStyles={styles.links}
                        isLink
                        url={dashboardPath}
                    >
                        <GitHubIcon sx={{ ...styles.icons, ...styles.logo }} />
                    </Links>
                    <SearchComponent />
                    <Box sx={styles.midBox} />
                    {/* the condition is applied just to show "suggestions",
                    "logout", "avatar" and more icon, only when user is
                    authenticated.  */}
                    {isAuthenticated ? (
                        <>
                            <Box sx={styles.rightBox}>
                                <IconButton
                                    size="large"
                                    aria-label="suggestions"
                                    color="inherit"
                                >
                                    <Links
                                        customStyles={styles.links}
                                        isLink
                                        url={suggestionsPath}
                                    >
                                        <BoltIcon sx={styles.icons} />
                                        {t('suggestions')}
                                    </Links>
                                </IconButton>
                                <IconButton
                                    onClick={handleLogout}
                                    size="large"
                                    color="inherit"
                                >
                                    <ExitToAppIcon
                                        sx={{
                                            ...styles.icons,
                                            ...styles.logoutIcon,
                                        }}
                                    />
                                    {t('logout')}
                                </IconButton>
                                <IconButton
                                    onClick={handleLangMenu}
                                    size="large"
                                    color="inherit"
                                >
                                    <LanguageIcon sx={styles.icons} />
                                    <ArrowDropDownIcon
                                        sx={styles.dropDownArrowIcon}
                                    />
                                </IconButton>
                            </Box>

                            <Menu
                                anchorEl={langMenuanchorEl}
                                open={openLangMenu}
                                onClose={handleLangMenuClose}
                                onClick={handleLangMenuClose}
                                transformOrigin={{
                                    horizontal: 'right',
                                    vertical: 'top',
                                }}
                                anchorOrigin={{
                                    horizontal: 'right',
                                    vertical: 'bottom',
                                }}
                            >
                                <MenuItem
                                    sx={styles.languageMenu.menuItem}
                                    onClick={() => handleLanguage('en')}
                                >
                                    <LanguageIcon
                                        sx={styles.languageMenu.languageIcon}
                                    />
                                    {t('english')}
                                </MenuItem>
                                <MenuItem
                                    sx={styles.languageMenu.menuItem}
                                    onClick={() => handleLanguage('hi')}
                                >
                                    <LanguageIcon
                                        sx={styles.languageMenu.languageIcon}
                                    />
                                    {t('hindi')}
                                </MenuItem>
                            </Menu>

                            <Box sx={styles.moreIconBox} ref={divRef}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuIdConstant}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                    sx={styles.moreIcon}
                                >
                                    <MoreIcon sx={styles.icons} />
                                </IconButton>
                            </Box>
                        </>
                    ) : (
                        <IconButton
                            aria-label="login"
                            size="large"
                            color="inherit"
                            sx={styles.loginBox}
                        >
                            <Links
                                customStyles={styles.links}
                                isLink
                                url={loginPath}
                            >
                                <LoginIcon
                                    sx={{
                                        ...styles.icons,
                                        ...styles.loginIcon,
                                    }}
                                />
                                <Typography variant="h5" sx={styles.loginTypo}>
                                    {t('login')}
                                </Typography>
                            </Links>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            {isAuthenticated ? renderMobileMenu : <></>}
        </Box>
    );
};

export default Navbar;
