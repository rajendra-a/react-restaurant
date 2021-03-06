import React, { Component } from 'react';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;