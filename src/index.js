import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import {configureStore,rootSagas } from './redux'


UIkit.use(Icons);
const history = createBrowserHistory();
const store = configureStore(null, history);


store.runSaga(rootSagas);





ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));
registerServiceWorker();
