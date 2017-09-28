import 'es6-shim';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from '../containers/Root';
import configureStore from '../store/configureStore';
import registerServiceWorker from '../lib/registerServiceWorker';
import { loginJWT } from '../lib/auth'; // eslint-disable-line
import { wsClient } from '../middleware/apolloClient';  // eslint-disable-line

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
injectTapEventPlugin();



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
		<Root store={store} history={history} />,
    document.body.appendChild(document.createElement('div')),
  );
});

registerServiceWorker();
