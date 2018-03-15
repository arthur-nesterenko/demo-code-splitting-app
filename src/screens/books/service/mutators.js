
export const fetchSuccessMutator = (state, { payload: { results } }) => ({
    ...state,
    isFetching: true,
    items: results
})