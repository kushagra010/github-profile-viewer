import { Dispatch } from 'redux';
import { IDashBoardProps } from 'Src/app/components/DashBoard';
import { endpointUsers } from 'Src/constants/endpoints';
import {
    PROFILE_FAILURE,
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
} from 'Src/constants/profileActionConstants';
import { IProfile } from 'Src/constants/types';
import dataFetcher from 'Src/utility/dataFetcher';

export const userProfileRequest = (): IProfile => ({
    type: PROFILE_REQUEST,
});

export const userProfileSuccess = (data: IDashBoardProps): IProfile => ({
    type: PROFILE_SUCCESS,
    payload: data,
});

export const userProfileFailure = (): IProfile => ({
    type: PROFILE_FAILURE,
});

export const userProfile =
    (username: string) =>
    async (dispatch: Dispatch<IProfile>): Promise<void> => {
        dispatch(userProfileRequest());
        const userData = await dataFetcher(`/${endpointUsers}/${username}`);
        if (typeof userData === 'string') {
            dispatch(userProfileFailure());
        } else {
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
            dispatch(
                userProfileSuccess({
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
                })
            );
        }
    };
