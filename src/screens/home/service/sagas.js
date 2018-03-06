import { fork, all, put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { homeActions } from './reducer'



function* fetch() {
    try {

        yield call(delay, 400);

        console.log('saga', 'home request')


        yield put(homeActions.fetch.success('success'))

    }
    catch (e) {
        yield put(homeActions.fetch.failure(e))
    }
}


function* watchFetchRequest() {
    yield takeLatest(homeActions.fetch.request, fetch)
}




function* rootSaga() {
    yield all([
        fork(watchFetchRequest)
    ])
}


export default rootSaga;