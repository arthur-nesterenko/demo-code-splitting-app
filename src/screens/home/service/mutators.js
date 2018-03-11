
export const fetchSuccessMutator = (state, { payload }) => ({
    ...state,
    isFetching: true,
    items: payload
})
