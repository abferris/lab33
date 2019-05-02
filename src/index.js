import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './store';
import App from './app.js';
import "./styles/styles.css"

const store = createStore();

class Main extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <App />;
      </Provider>
    )

    
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
