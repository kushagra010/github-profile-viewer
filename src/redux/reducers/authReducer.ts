import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from 'Constants/userActionConstants';
import { IAuth, Ilogin } from 'Constants/types';
import initialState from './initialState';

const authReducer = (
    state: IAuth = initialState.auth,
    action: Ilogin
): IAuth => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, errorMsg: '' };
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.userData || '',
                token: action.payload || '',
                loading: false,
                isAuthenticated: true,
                errorMsg: '',
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                errorMsg: action.payload || '',
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
