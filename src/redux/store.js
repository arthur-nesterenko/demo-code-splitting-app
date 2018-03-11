import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import { createSagaMonitor } from 'redux-saga-devtools'
import reducerRegistry, { ReducerRegistry } from './../lib/registry/reducer-registry'
import sagaRegistry from './../lib/registry/saga-registry'
import { request } from './../lib/api'


export const monitor = createSagaMonitor();

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const configureStore = (preloadedState, history) => {

    const sagaMiddleware = createSagaMiddleware({
        sagaMonitor: monitor,
        context: {
            request
        }
    })


    const logger = createLogger({
        collapsed: true,
        diff: true,
    });

    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history),
        logger,
    ];


    const rootReducer = ReducerRegistry.combine(reducerRegistry.getReducers(), preloadedState)


    reducerRegistry.setChangeListener(reducers => {
        store.replaceReducer(ReducerRegistry.combine(reducers));
    });


    // if (module.hot) {
    //     console.log('hot');
    //     ReducerRegistry.combine(reducerRegistry.getReducers())
    // }


    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(...middlewares))
    );

    store.runSaga = sagaMiddleware.run;



    sagaRegistry.getSagas().forEach(saga => {
        store.runSaga(saga)
    });


    sagaRegistry.setChangeListener(store.runSaga);



    return store;

};

export default configureStore;
