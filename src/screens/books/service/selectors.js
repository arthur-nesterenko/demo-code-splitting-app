import { createSelector } from 'reselect';
import { reducerName } from './reducer'


const isFetching = state => state[reducerName].isFetching;
const getItems = state => state[reducerName].items;



const isFetchingSelector = createSelector(
    isFetching,
    isFetching => isFetching
)

const itemsSelector = createSelector(
    getItems,
    items => items
)


export default { isFetchingSelector, itemsSelector }
