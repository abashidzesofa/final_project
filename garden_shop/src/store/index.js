import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categories_reducer } from './reducers/categories_reducer';
import { products_reducer } from './reducers/products_reducer';
import { thunk } from 'redux-thunk'
import { products_by_category_reducer } from './reducers/products_by_category_reducer';
import { single_products_reducer } from './reducers/single_product_reducer';

const rootReducer = combineReducers( {
categories: categories_reducer,
products: products_reducer,
products_by_category: products_by_category_reducer,
single_product: single_products_reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));