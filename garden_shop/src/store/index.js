import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categories_reducer } from './categories_reducer';
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers( {
categories: categories_reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));