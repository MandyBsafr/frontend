import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const { NODE_ENV } = process.env;
const composeEnhancersClient = NODE_ENV === 'development' && !!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const middleware = applyMiddleware(
  thunk,
);

const createStoreWithMiddleware = composeEnhancersClient(
  middleware,
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
