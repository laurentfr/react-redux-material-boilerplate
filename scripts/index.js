import 'babel-polyfill';//required for Object.assign method accross different browsers
import React from 'react';
import {render} from 'react-dom';
import Application from './containers/Application';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import "../styles/main.scss"

injectTapEventPlugin();

let store = createStore(reducer);

render(<Provider store={store}><Application/></Provider>,document.getElementById('root'));

