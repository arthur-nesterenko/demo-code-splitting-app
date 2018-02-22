import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger'
import {createSagaMonitor} from 'redux-saga-devtools'
import rootReducer from './reducer';

export const monitor = createSagaMonitor();

const configureStore = (preloadedState, history) => {

    const sagaMiddleware = createSagaMiddleware({
        monitor
    })


    const logger = createLogger({
        collapsed: true,
        diff: true,
    });

    const middlewares = [sagaMiddleware, routerMiddleware(history), logger];

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            store.replaceReducer(rootReducer);
        });
    }


    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    store.runSaga = sagaMiddleware.run;
    return store;

};

export default configureStore;
