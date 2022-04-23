import React from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShowMoreText from 'react-show-more-text';

import Links from 'Components/LinksOrAnchor/index';
import Avatar from 'Components/Avatars/index';
import styles from './styles';

export interface IDashBoardProps {
    avatarUrl: string;
    userName: string;
    name: string;
    location: string | null;
    followers: number;
    following: number;
    bio: string;
    githubUrl: string;
    blog: string | '';
    company: string | null;
    email: string | null;
    twitterUserName: string | null;
}

const DashBoardComponent = ({
    avatarUrl,
    userName,
    name,
    location,
    followers,
    following,
    bio,
    githubUrl,
    blog,
    company,
    email,
    twitterUserName,
}: IDashBoardProps): JSX.Element => (
    <Box sx={styles.dashBoard}>
        <Box sx={styles.card}>
            <Box sx={styles.header} />
            <Box sx={styles.body}>
                <Box sx={styles.leftBox}>
                    <Box sx={styles.avatarBox}>
                        <Avatar sx={styles.avatar} alt={name} src={avatarUrl} />
                    </Box>
                    <Box sx={styles.userBox}>
                        <Typography variant="h2" sx={styles.user}>
                            {name}
                        </Typography>
                        <Typography variant="body1" sx={styles.userName}>
                            @{userName}
                        </Typography>
                    </Box>
                    <Box sx={styles.userInfoBox}>
                        {company ? (
                            <Box sx={styles.userInfo}>
                                <ApartmentIcon sx={styles.icon} />
                                <Typography
                                    sx={styles.typography}
                                    variant="body2"
                                >
                                    {company}
                                </Typography>
                            </Box>
                        ) : (
                            <></>
                        )}
                        {location ? (
                            <Box sx={styles.userInfo}>
                                <LocationOnIcon sx={styles.icon} />
                                <Typography
                                    sx={styles.typography}
                                    variant="body2"
                                >
                                    {location}
                                </Typography>
                            </Box>
                        ) : (
                            <></>
                        )}
                        {email ? (
                            <Box sx={styles.userInfo}>
                                <EmailIcon sx={styles.icon} />
                                <Links
                                    isLink={false}
                                    newTab
                                    url={`mailto:${email}`}
                                    customStyles={styles.userInfoLink}
                                    className="ellipsis-2 userInfo-link"
                                >
                                    {email}
                                </Links>
                            </Box>
                        ) : (
                            <></>
                        )}
                        {blog ? (
                            <Box sx={styles.userInfo}>
                                <LinkIcon sx={styles.icon} />
                                <Links
                                    isLink={false}
                                    newTab
                                    url={blog}
                                    customStyles={styles.userInfoLink}
                                    className="ellipsis-2 userInfo-link"
                                >
                                    {blog}
                                </Links>
                            </Box>
                        ) : (
                            <></>
                        )}
                        {twitterUserName ? (
                            <Box sx={styles.userInfo}>
                                <TwitterIcon sx={styles.icon} />
                                <Links
                                    isLink={false}
                                    newTab
                                    url={`https://twitter.com/${twitterUserName}`}
                                    customStyles={styles.userInfoLink}
                                    className="ellipsis-2 userInfo-link"
                                >
                                    @{twitterUserName}
                                </Links>
                            </Box>
                        ) : (
                            <></>
                        )}
                        {!company &&
                            !location &&
                            !email &&
                            !blog &&
                            !twitterUserName && (
                                <Typography sx={styles.noUserInfo} variant="h5">
                                    NO USER INFO FOUND
                                </Typography>
                            )}
                    </Box>
                </Box>
                <Box sx={styles.rightBox}>
                    <Box sx={styles.followBox}>
                        <Box sx={styles.follow}>
                            <b>{followers}</b>
                            <Typography sx={styles.typography} variant="body2">
                                Followers
                            </Typography>
                        </Box>
                        <Box sx={styles.follow}>
                            <b>{following}</b>
                            <Typography sx={styles.typography} variant="body2">
                                Following
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.bioBox}>
                        {bio ? (
                            <Box sx={styles.bio}>
                                <Typography
                                    component="span"
                                    sx={{
                                        ...styles.typography,
                                        ...styles.bioTypo,
                                    }}
                                    variant="body2"
                                >
                                    <ShowMoreText
                                        lines={3}
                                        more="Show more"
                                        less="Show less"
                                        expanded={false}
                                        truncatedEndingComponent="... "
                                    >
                                        {bio}
                                    </ShowMoreText>
                                </Typography>
                            </Box>
                        ) : (
                            <></>
                        )}
                        <Box sx={styles.externalLinkBox}>
                            <Links newTab isLink={false} url={githubUrl}>
                                <Box
                                    color="primary"
                                    sx={{
                                        ...styles.profileBtn,
                                        ...styles.button,
                                    }}
                                >
                                    Visit Github
                                </Box>
                            </Links>
                            {blog && (
                                <Links newTab isLink={false} url={blog}>
                                    <Box
                                        color="primary"
                                        sx={{
                                            ...styles.portfolioBtn,
                                            ...styles.button,
                                        }}
                                    >
                                        Portfolio
                                    </Box>
                                </Links>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
);

export default DashBoardComponent;
