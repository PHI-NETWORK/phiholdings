import 'bootstrap';
import './../client/scss/app.scss'
import 'font-awesome/scss/font-awesome.scss'
import './../client/scss/normalize.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from '../routes/routes'

import data from './../bin/history.json'
import configureStore, { history } from '../store/configureStore'
import {getHistory} from '../actions'

import App from './../components/App/App'
import './../logix/wallets'

const store = configureStore()
store.dispatch(getHistory(data));

render(
    <Provider store={store} >
        <App history={history}>
            { routes } 
        </App>
    </Provider>,
    document.getElementById('app')
);