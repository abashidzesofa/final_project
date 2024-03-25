import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categories_reducer } from './reducers/categories_reducer';
import { products_reducer } from './reducers/products_reducer';
import { thunk } from 'redux-thunk'
import { products_by_category_reducer } from './reducers/products_by_category';

const rootReducer = combineReducers( {
categories: categories_reducer,
products: products_reducer,
products_by_category: products_by_category_reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));