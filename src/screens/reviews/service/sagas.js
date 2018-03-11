import { call, put, takeLatest, all, fork, getContext } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { reviewsActions } from './reducer'



function* fetch({ payload }) {

    try {

        const request = yield getContext('request')

        const { results } = yield call(request, '/reviews.json', payload)
        yield call(delay, 300)

        console.log('post fetch saga', results);

        yield put(reviewsActions.fetch.success(results))



    } catch (e) {

        console.log('post failed', e)

    }


}


function* watchFetch() {
    yield takeLatest(reviewsActions.fetch.request, fetch)
}


function* rootPostsSaga() {
    yield all([
        fork(watchFetch)
    ])
}

export default rootPostsSaga;