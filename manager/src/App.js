import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBDBAkxsxmqDrhZVFSSuscWr2t1PF6ShzY',
      authDomain: 'manager-a0860.firebaseapp.com',
      databaseURL: 'https://manager-a0860.firebaseio.com',
      projectId: 'manager-a0860',
      storageBucket: 'manager-a0860.appspot.com',
      messagingSenderId: '383121865951'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
