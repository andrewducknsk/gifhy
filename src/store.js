import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: f => f
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
