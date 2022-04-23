import React from 'react';

import { useSelector } from 'react-redux';

import DashBoardComponent from 'Components/DashBoard';
import { RootState } from 'Constants/types';

const DashBoardContainer = (): JSX.Element => {
    const userAuth = useSelector((state: RootState) => state.userAuth);
    const userData = JSON.parse(userAuth.data || '');

    const {
        avatar_url: avatarUrl,
        login: userName,
        name,
        location,
        followers,
        following,
        bio,
        html_url: githubUrl,
        blog,
        company,
        email,
        twitter_username: twitterUserName,
    } = userData;

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

export default DashBoardContainer;
