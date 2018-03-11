

export const fetchSuccessMutator = (state, { payload: { results, num_results } }) => ({
    ...state,
    items: results,
    numResults: num_results,
    isFetching: true
})