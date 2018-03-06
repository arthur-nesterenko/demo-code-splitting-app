import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { postsActions } from './reducer'



function* fetch() {

    try {


        yield call(delay, 300)
        console.log('post fetch saga');

        yield put(postsActions.request.success())



    } catch (e) {

        console.log('post failed', e)

    }


}


function* watchFetch() {
    yield takeLatest(postsActions.fetch.request, fetch)
}


function* rootPostsSaga() {
    yield all([
        fork(watchFetch)
    ])
}

export default rootPostsSaga;