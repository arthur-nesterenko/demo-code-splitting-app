import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import Root from './Root'






class App extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <Root/>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
