import 'dotenv/config';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import initialState from './initialState';
import apiMiddleware from '../middlewares/apiMiddleware';
import reducers from '../reducers';

const middlewares = [thunk, apiMiddleware];

export default createStore(
   combineReducers(reducers),
   initialState,
   composeWithDevTools(applyMiddleware(...middlewares))
);
