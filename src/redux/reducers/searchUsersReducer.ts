import { SEARCH_USER } from 'Src/constants/searchUserActionConstants';
import { ISearchUser, ISearchUserState } from 'Src/constants/types';
import initialState from './initialState';

export const searchUserReducer = (
    state: ISearchUserState = initialState.searchUser,
    action: ISearchUser
): ISearchUserState => {
    switch (action.type) {
        case SEARCH_USER:
            return { ...state, usersList: action.payload };
        default:
            return state;
    }
};
