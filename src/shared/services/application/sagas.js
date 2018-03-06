import { fork, call, all, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { appActions } from './reducer'
import sagaRegistry from './../../../lib/registry/saga-registry'



function* start() {
    try {

        yield call(delay, 300)

        console.log('apllication Saga start');


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


sagaRegistry.register(rootApplicationSaga)



export default rootApplicationSaga;