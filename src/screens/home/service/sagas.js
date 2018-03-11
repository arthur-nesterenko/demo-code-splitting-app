import { fork, all, put, takeLatest, call, getContext } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { homeActions } from './reducer'



function* fetch() {

    try {

        const request = yield getContext('request')


        const { results } = yield call(request, '/lists/best-sellers/history.json');



        yield call(delay, 300);

        yield put(homeActions.receive.success(results))

    }
    catch (e) {
        yield put(homeActions.receive.failure(e))
    }
}


function* watchFetchRequest() {
    yield takeLatest(homeActions.receive.request, fetch)
}




function* rootSaga() {
    yield all([
        fork(watchFetchRequest)
    ])
}


export default rootSaga;