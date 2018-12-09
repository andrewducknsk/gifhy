// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// Components
import App from './components/App/App';
import getStore from './store';
// Style
import './scaffolding.scss';

const store = getStore();

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();
