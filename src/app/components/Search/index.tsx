import React, { useState, useCallback, useEffect } from 'react';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, Typography, Autocomplete, Paper } from '@mui/material';
import debounce from 'lodash.debounce';

import Avatar from 'Components/Avatars';
import { IObject, ISearchUserPayload, RootState } from 'Constants/types';
import { enterKey } from 'Constants/miscConstants';
import { searchUserPath } from 'Constants/routeConstants';
import {
    getSearchUserList,
    searchUser,
} from 'Redux/actions/searchActionCreators';
import Links from 'Components/LinksOrAnchor';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

const SearchComponent = (): JSX.Element => {
    const [search, setsearch] = useState('');
    const { usersList } = useSelector(
        (state: RootState) => state.searchedUserList
    );
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearch = (newValue: string): void => {
        setsearch(newValue);
    };

    const emptyUserList = (): void => {
        dispatch(searchUser([]));
    };

    const redirectToUser = (event: IObject): void => {
        if (search && event?.key === enterKey) {
            history.push(`${searchUserPath}/${event.target.value}`);
        }
    };

    const getOptionLabel = (option: ISearchUserPayload): string =>
        option.login || search;

    const renderOption = (
        props: IObject,
        option: ISearchUserPayload
    ): JSX.Element => (
        <Links
            isLink
            url={`${searchUserPath}/${option.login}`}
            customStyles={styles.autoCompleteOption}
            key={option.login}
        >
            <Box component="li" {...props}>
                <Avatar
                    loading="lazy"
                    width="20"
                    customStyles={styles.avatar}
                    alt={option.login}
                    src={option.avatarUrl}
                />
                <Typography variant="h5">{option.login}</Typography>
            </Box>
        </Links>
    );

    const renderInput = (params: IObject): JSX.Element => {
        const { InputProps, ...rest } = params;
        return (
            <InputBase
                sx={styles.styledInputBase}
                placeholder={t('search.placeholder')}
                {...InputProps}
                {...rest}
            />
        );
    };

    const fetchUsers = (): void => {
        if (search) {
            dispatch(getSearchUserList(search));
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const delayedQuery = useCallback(debounce(fetchUsers, 500), [search]);

    useEffect(() => {
        delayedQuery();
        return delayedQuery.cancel;
    }, [delayedQuery, search]);

    useEffect(() => {
        if (!search) {
            emptyUserList();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const close = document.getElementsByClassName(
            'MuiAutocomplete-clearIndicator'
        )[0];

        close.addEventListener('click', () => {
            setsearch('');
        });
    }, []);

    return (
        <Box sx={styles.searchDiv}>
            <Box sx={styles.searchIconWrapper}>
                <SearchIcon sx={styles.searchIcon} />
            </Box>
            <Autocomplete
                id="free-solo"
                onInputChange={(event, newValue) => {
                    handleSearch(newValue);
                }}
                value={search}
                freeSolo={usersList.length !== 0}
                options={usersList}
                getOptionLabel={getOptionLabel}
                renderOption={renderOption}
                noOptionsText={
                    !search
                        ? t('search.typeForSuggestions')
                        : t('search.noMatchFound')
                }
                onKeyPress={redirectToUser}
                PaperComponent={({ children }) => (
                    <Paper sx={styles.paper}>{children}</Paper>
                )}
                renderInput={renderInput}
            />
        </Box>
    );
};

export default SearchComponent;
