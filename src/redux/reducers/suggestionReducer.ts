import {
    SUGGESTION_FAILURE,
    SUGGESTION_REQUEST,
    SUGGESTION_SUCCESS,
} from 'Src/constants/suggestionsActionConstants';
import { ISuggestions, ISuggestionState } from 'Src/constants/types';
import initialState from './initialState';

const suggestionReducer = (
    state: ISuggestionState = initialState.suggestions,
    action: ISuggestions
): ISuggestionState => {
    switch (action.type) {
        case SUGGESTION_REQUEST:
            return { ...state, loading: true };
        case SUGGESTION_FAILURE:
            return { ...state, loading: false };
        case SUGGESTION_SUCCESS:
            return { ...state, loading: false, data: action.payload || [] };
        default:
            return state;
    }
};

export default suggestionReducer;
