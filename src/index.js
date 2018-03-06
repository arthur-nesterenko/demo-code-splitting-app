import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { configureStore, rootSagas } from './redux'
import { appActions } from './shared/services/application'


UIkit.use(Icons);
const history = createBrowserHistory();
const store = configureStore({}, history);


store.dispatch(appActions.start())




ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));
registerServiceWorker();
