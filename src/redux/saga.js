import { fork, all } from 'redux-saga/effects';
import { rootAppSaga } from './../shared/services/application'

/**
 *
 */
function* root() {
    yield all([fork(rootAppSaga)]);
}

export default root;
