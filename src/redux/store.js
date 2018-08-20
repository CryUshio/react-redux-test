import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducer';

function logger(store) {
    return next => action => {
        console.log('log action:\n', action);
        next(action);  // next => dispatch
    };
}
function tail(store) {
    return next => action => {
        console.log('the next middleware');
        next(action);  // next => dispatch
    };
}

const store = createStore(combineReducers, applyMiddleware(logger, tail));

export default store;