import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
