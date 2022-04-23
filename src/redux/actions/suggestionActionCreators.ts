import { Dispatch } from 'redux';
import { endpointUsers } from 'Src/constants/endpoints';
import {
    maxGithubId,
    minGithubId,
    usersPerPage,
} from 'Src/constants/miscConstants';
import {
    SUGGESTION_FAILURE,
    SUGGESTION_REQUEST,
    SUGGESTION_SUCCESS,
} from 'Src/constants/suggestionsActionConstants';
import { getRandomNumber } from 'Src/utility/randomNumber';
import { IObject, ISuggestions } from 'Src/constants/types';
import dataFetcher from 'Src/utility/dataFetcher';

export const getSuggestionRequest = (): ISuggestions => ({
    type: SUGGESTION_REQUEST,
});

export const getSuggestionFailure = (): ISuggestions => ({
    type: SUGGESTION_FAILURE,
});

export const getSuggestionSuccess = (data: IObject[]): ISuggestions => ({
    type: SUGGESTION_SUCCESS,
    payload: data,
});

export const getSuggestion =
    () =>
    async (dispatch: Dispatch<ISuggestions>): Promise<void> => {
        dispatch(getSuggestionRequest());
        const userSuggestions = await dataFetcher(endpointUsers, {
            params: {
                since: getRandomNumber(minGithubId, maxGithubId),
                per_page: usersPerPage,
            },
        });

        if (typeof userSuggestions === 'string') {
            dispatch(getSuggestionFailure());
        } else {
            dispatch(getSuggestionSuccess(userSuggestions));
        }
    };
