import { createSelector } from 'reselect'
import { reducerName } from './reducer'



const isFetching = state => state[reducerName].isFetching;
const getItems = state => state[reducerName].items;
const numResults = state => state[reducerName].numResults;




const isFetchingSelector = createSelector(
    isFetching,
    isFetching => isFetching
);


const itemsSelector = createSelector(
    getItems,
    items => items
);


const numResultsSelector = createSelector(
    numResults,
    numResults => numResults
)


export default { isFetchingSelector, itemsSelector, numResultsSelector }