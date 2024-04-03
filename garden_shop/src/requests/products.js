import { load_products_action } from "../store/reducers/products_reducer";
import { domen } from "./categories";
import { load_products_by_categories_action } from '../store/reducers/products_by_category_reducer';
import { load_single_product_action } from "../store/reducers/single_product_reducer";


export const get_products = dispatch => {
   fetch(`${domen}/products/all`)
      .then (res => res.json())
      .then (json => dispatch(load_products_action(json)))
}

export const get_products_by_category = id => {
   return dispatch => {
      fetch(`${domen}/categories/${id}`)
         .then (res => res.json())
         .then (json => dispatch(load_products_by_categories_action(json)))
   }
   
}



export const get_single_product = id => {
   return dispatch => {
      fetch(`${domen}/products/${id}`)
         .then(res => res.json())
         .then(json => dispatch(load_single_product_action(json)))
   }
   
}