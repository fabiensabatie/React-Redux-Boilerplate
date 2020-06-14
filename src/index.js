import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import sagas from './sagas';
import reducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Init reducers and Sagas
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = compose(applyMiddleware(...middlewares));

export const store =
	process.env.NODE_ENV !== 'production'
		? createStore(reducer, /* mock_data, */ enhancer)
		: createStore(reducer, enhancer);

sagaMiddleware.run(sagas);

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
