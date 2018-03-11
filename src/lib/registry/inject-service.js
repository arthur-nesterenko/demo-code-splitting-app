import reducerRegistry from './reducer-registry';
import sagaRegistry from './saga-registry'




const injectService = (reducerConfig, saga) => {
    const { reducer, reducerName } = reducerConfig;
    reducerRegistry.register(reducerName, reducer);

    if (saga)
        sagaRegistry.register(saga);
}


export default injectService;



