import 'dotenv/config';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import apiMiddleware from '../middlewares/apiMiddleware';

const middlewares = [thunk, apiMiddleware];

export default createStore(
    composeWithDevTools(applyMiddleware(...middlewares))
);
