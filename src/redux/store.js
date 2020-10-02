import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './index';

//const middlewares = [logger];

const store = createStore( rootReducer, applyMiddleware());

export default store;