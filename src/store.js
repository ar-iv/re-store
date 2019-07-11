import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware = (store) => (next) => (action) => {
	console.log(action.type);
	return next(action);
};

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action
		});
	}
	return next(action);
};

const store = createStore(reducer, applyMiddleware(
	thunkMiddleware,
	stringMiddleware, 
	logMiddleware));

const myAction = (dispatch) => {
	setTimeout(() => dispatch({
		type: 'DELAYED_ACTION'
	}), 2000);
};

const delayedActionCreater = (timeout) => (dispatch) => {
	setTimeout(() => dispatch({
		type: 'DELAYED_ACTION'
	}), timeout);
};

store.dispatch(delayedActionCreater(10000));

export default store;
