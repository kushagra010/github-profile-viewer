import { Dispatch } from 'redux';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from 'Constants/userActionConstants';
import { IUserCredentials, Ilogin } from 'Constants/types';
import { authenticationFailed } from 'Constants/errors';
import { endpointUser } from 'Constants/endpoints';
import { tokenConstant, userDataConstant } from 'Constants/miscConstants';
import dataFetcher from 'Utility/dataFetcher';

export const userLoginRequeest = (): Ilogin => ({
    type: LOGIN_REQUEST,
});

export const userLoginSuccess = (token: string, userData: string): Ilogin => ({
    type: LOGIN_SUCCESS,
    payload: token,
    userData,
});

export const userLoginFailure = (error: string): Ilogin => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const userLogin =
    (userCredentials: IUserCredentials) =>
    async (dispatch: Dispatch<Ilogin>): Promise<void> => {
        dispatch(userLoginRequeest());
        const userData = await dataFetcher(endpointUser, {
            headers: {
                Authorization: `Bearer ${userCredentials.token}`,
            },
        });
        if (
            typeof userData === 'string' ||
            userData.login !== userCredentials.userName
        ) {
            dispatch(userLoginFailure(authenticationFailed));
        } else {
            localStorage.setItem(tokenConstant, userCredentials.token);
            localStorage.setItem(userDataConstant, JSON.stringify(userData));
            dispatch(
                userLoginSuccess(
                    userCredentials.token,
                    JSON.stringify(userData)
                )
            );
        }
    };

export const userLogout = (): Ilogin => {
    localStorage.clear();
    return {
        type: LOGOUT,
    };
};
