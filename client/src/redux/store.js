import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';
const INITIAL_STATES = undefined;

const composeEnhancers = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose;


const store = createStore(
    rootReducer,
    INITIAL_STATES,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;
