import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// redux
import store, {history} from './redux/store';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'
// fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUsers} from '@fortawesome/free-solid-svg-icons'

library.add(faUsers);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();