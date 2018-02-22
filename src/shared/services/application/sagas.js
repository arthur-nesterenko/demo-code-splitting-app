import { fork, call, all,takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { appActions } from './reducer'



function* start() {
    try {

        yield call(delay, 300)


    } catch (e) {

    }
}


function* watchStart() {
    yield takeLatest(appActions.start, start)
}



function* rootApplicationSaga() {
    yield all([
        fork(watchStart)
    ])
}


export default rootApplicationSaga;