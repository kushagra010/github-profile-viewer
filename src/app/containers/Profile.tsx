import React, { useEffect } from 'react';

import { useParams } from 'react-router';

import DashBoardComponent from 'Components/DashBoard';
import CircularProgress from 'Components/CircularProgress';
import NotFound from 'Components/NotFound';
import { RootState } from 'Constants/types';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from 'Redux/actions/profileActionCreator';

interface ParamTypes {
    username: string;
}

const ProfileContainer = (): JSX.Element => {
    const { username } = useParams<ParamTypes>();
    const { userData, loading, error } = useSelector(
        (state: RootState) => state.arbitraryProfile
    );
    const dispatch = useDispatch();

    const {
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
    } = userData;

    const profileControl = (): JSX.Element => {
        if (loading) {
            return <CircularProgress />;
        }
        if (error) {
            return <NotFound />;
        }
        return (
            <DashBoardComponent
                avatarUrl={avatarUrl}
                userName={userName}
                name={name}
                location={location}
                followers={followers}
                following={following}
                bio={bio}
                githubUrl={githubUrl}
                blog={blog}
                company={company}
                email={email}
                twitterUserName={twitterUserName}
            />
        );
    };

    useEffect(() => {
        dispatch(userProfile(username));
    }, [dispatch, username]);

    return profileControl();
};

export default ProfileContainer;
