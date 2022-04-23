import { Dispatch } from 'redux';
import { SEARCH_USER } from 'Constants/searchUserActionConstants';
import { IObject, ISearchUser, ISearchUserPayload } from 'Constants/types';
import dataFetcher from 'Src/utility/dataFetcher';
import { endpointSearchUser } from 'Constants/endpoints';

export const searchUser = (usersList: ISearchUserPayload[]): ISearchUser => ({
    type: SEARCH_USER,
    payload: usersList,
});

export const getSearchUserList =
    (search: string) =>
    async (dispatch: Dispatch<ISearchUser>): Promise<void> => {
        const rawData = await dataFetcher(`${endpointSearchUser}?q=${search}`);
        if (typeof rawData === 'object') {
            const data = rawData.items.map((user: IObject) => {
                const { avatar_url: avatarUrl, login } = user;
                return { avatarUrl, login };
            });
            dispatch(searchUser(data));
        }
    };
