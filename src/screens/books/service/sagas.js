import { fork, all, put, call, takeLatest, getContext } from 'redux-saga/effects'
import { booksActions } from './reducer'


function* fetch({ payload }) {

    try {

        const request = yield getContext('request');

        const { results } = yield call(request, 'lists.json', payload);

        yield put(booksActions.fetch.success({ results}));

    } catch (e) {
        yield put(booksActions.fetch.failure(e))
    }
}


function* watchFetchRequest() {
    yield takeLatest(booksActions.fetch.request, fetch)
}



function* rootBooksSaga() {
    yield all([
        fork(watchFetchRequest)
    ])
}


export default rootBooksSaga;