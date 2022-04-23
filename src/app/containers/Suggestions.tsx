import React, { useEffect } from 'react';

import { RootState } from 'Constants/types';
import { useDispatch, useSelector } from 'react-redux';
import { getSuggestion } from 'Redux/actions/suggestionActionCreators';
import CircularProgress from 'Components/CircularProgress';
import SuggestionComponent from 'Components/Suggestions';

const SuggestionsContainer = (): JSX.Element => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector(
        (state: RootState) => state.suggestions
    );

    const refresh = (): void => {
        dispatch(getSuggestion());
    };

    useEffect(() => {
        if (!data.length) {
            dispatch(getSuggestion());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return loading ? (
        <CircularProgress />
    ) : (
        <SuggestionComponent refresh={refresh} suggestedUsers={data} />
    );
};

export default SuggestionsContainer;
