import { call, fork, all, getContext, takeLatest, put } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { overviewActions } from './reducer'



function* fetch({ payload }) {

    try {



        const request = yield getContext('request');

        const response = yield call(request, '/lists/overview.json', payload);

        yield put(overviewActions.fetch.success(response))



        yield put(replace(`/overview/${response.results.bestsellers_date}`))




    } catch (e) {

        yield put(overviewActions.fetch.failure(e))

    }
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