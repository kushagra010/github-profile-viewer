import rootReducer from 'Redux/reducers/rootReducer';
import { IDashBoardProps } from 'Src/app/components/DashBoard';

export type IObject = Record<string, any>;

export interface Ilogin {
    type: string;
    payload?: string;
    userData?: string;
}

export interface IUserCredentials {
    userName: string;
    token: string;
}

export interface IAuth {
    data: string | null;
    token: string | null;
    isAuthenticated: boolean;
    errorMsg: string;
    loading: boolean;
}

export type RootState = ReturnType<typeof rootReducer>;

export interface IProfile {
    type: string;
    payload?: IDashBoardProps;
}

export interface IProfileState {
    userData: IDashBoardProps;
    error: string;
    loading: boolean;
}

export interface ISearchUserPayload {
    avatarUrl: string;
    login: string;
}

export interface ISearchUser {
    type: string;
    payload: ISearchUserPayload[];
}

export interface ISearchUserState {
    usersList: ISearchUserPayload[];
}
export interface ISuggestions {
    type: string;
    payload?: IObject[];
}

export interface ISuggestionState {
    loading: boolean;
    data: IObject[];
}
