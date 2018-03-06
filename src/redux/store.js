import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import { createSagaMonitor } from 'redux-saga-devtools'
// import rootReducer from './reducer';

import reducerRegistry, { ReducerRegistry } from './../lib/registry/reducer-registry'
import sagaRegistry, { SagaRegistry } from './../lib/registry/saga-registry'

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


    const rootReducer = ReducerRegistry.combine(reducerRegistry.getReducers(), preloadedState)


    reducerRegistry.setChangeListener(reducers => {
        store.replaceReducer(ReducerRegistry.combine(reducers));
    });


    if (module.hot) {
        module.hot.accept('./reducer', () => {
            store.replaceReducer(rootReducer);
        });
    }


    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    store.runSaga = sagaMiddleware.run;



    sagaRegistry.getSagas().forEach(saga => {
        store.runSaga(saga)
    });


    sagaRegistry.setChangeListener(sagas => {
        sagas.forEach(store.runSaga)
    })



    return store;

};

export default configureStore;
