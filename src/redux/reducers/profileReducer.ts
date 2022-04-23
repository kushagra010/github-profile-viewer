import { noMatchFound } from 'Src/constants/errors';
import {
    PROFILE_FAILURE,
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
} from 'Src/constants/profileActionConstants';
import { IProfile, IProfileState } from 'Src/constants/types';
import initialState from './initialState';

const profileReducer = (
    state: IProfileState = initialState.profile,
    action: IProfile
): IProfileState => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return { ...state, loading: true, error: '' };
        case PROFILE_FAILURE:
            return { ...state, loading: false, error: noMatchFound };
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.payload || initialState.profile.userData,
            };
        default:
            return state;
    }
};

export default profileReducer;
