import { Box, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Avatar from 'Components/Avatars';
import { IObject } from 'Src/constants/types';
import Links from 'Components/LinksOrAnchor';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import { searchUserPath } from 'Src/constants/routeConstants';
import { usersPerPage } from 'Src/constants/miscConstants';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

interface ISuggestionComponentProps {
    refresh: () => void;
    suggestedUsers: IObject[];
}

const SuggestionComponent = ({
    refresh,
    suggestedUsers,
}: ISuggestionComponentProps): JSX.Element => {
    const [count, setcount] = useState(3);
    const [showableUsers, setshowableUsers] = useState(
        suggestedUsers.slice(0, 3)
    );
    const { t } = useTranslation();

    const removeUser = (event: IObject, index: number): void => {
        event.target.parentElement.parentElement.classList.add('item-fadeout');
        setTimeout(() => {
            const tempUsers = [
                ...showableUsers.slice(0, index),
                ...showableUsers.slice(index + 1),
            ];
            tempUsers.push(...suggestedUsers.slice(count, count + 1));
            setcount(count + 1);
            setshowableUsers(tempUsers);
        }, 1100);
    };

    const newSuggestions = (): void => {
        const newUsers = [...suggestedUsers.slice(count, count + 3)];
        setcount(count + 3);
        setshowableUsers(newUsers);
    };

    useEffect(() => {
        if (count >= usersPerPage) {
            refresh();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    return (
        <Box sx={styles.suggestions}>
            <Typography sx={styles.suggestionsHeader} variant="h2">
                {t('suggestions')}
                <ReplayIcon onClick={newSuggestions} sx={styles.replayIcon} />
            </Typography>
            <Box>
                {showableUsers.map(
                    (user: IObject, index: number): JSX.Element => {
                        const { avatar_url: avatarUrl, login, id } = user;

                        return (
                            <Box sx={styles.cardWrapper} key={id}>
                                <Links
                                    url={`${searchUserPath}/${login}`}
                                    isLink
                                >
                                    <CardContent sx={styles.cardContent}>
                                        <Avatar
                                            alt={login}
                                            src={avatarUrl}
                                            customStyles={styles.avatar}
                                        />
                                        <Typography
                                            variant="h4"
                                            color="text.secondary"
                                            sx={styles.typography}
                                        >
                                            {user.login}
                                        </Typography>
                                    </CardContent>
                                </Links>
                                <CardActions
                                    sx={styles.cardActions}
                                    id={id}
                                    onClick={(event) =>
                                        removeUser(event, index)
                                    }
                                >
                                    <CloseIcon sx={styles.closeIcon} />
                                </CardActions>
                            </Box>
                        );
                    }
                )}
            </Box>
        </Box>
    );
};

export default SuggestionComponent;
