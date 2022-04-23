import { combineReducers } from 'redux';

import authReducer from './authReducer';
import suggestionReducer from './suggestionReducer';
import profileReducer from './profileReducer';
import { searchUserReducer } from './searchUsersReducer';

const rootReducer = combineReducers({
    userAuth: authReducer,
    arbitraryProfile: profileReducer,
    searchedUserList: searchUserReducer,
    suggestions: suggestionReducer,
});

export default rootReducer;
