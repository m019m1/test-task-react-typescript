import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Home from './components/home/home';
import Gallery from './components/gallery/gallery';
import APIclient from './components/apiClient/apiClient';
import Error from './components/error/error';
import './index.css';

ReactDOM.render((
	<HashRouter>
		<App>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/gallery' component={Gallery} />
				<Route path='/apiClient' component={APIclient} />
				<Route path='*' component={Error} />
			</Switch>
		</App>
	</HashRouter>
	), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
