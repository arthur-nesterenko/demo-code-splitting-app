import { call, fork, all, getContext, takeLatest, put } from 'redux-saga/effects'
import { overviewActions } from './reducer'



function* fetch({ payload }) {

    try {

        const request = yield getContext('request');


    } catch (e) { console.log('rrr') }
}



function* watchFetchRequest() {

    yield takeLatest(overviewActions.fetch.request, fetch)
}



function* rootSaga() {
    yield all([
        fork(watchFetchRequest)
    ])
}


export default rootSaga;