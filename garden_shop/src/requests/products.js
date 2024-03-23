import { load_products_action } from "../store/reducers/products_reducer";
import { domen } from "./categories";

export const get_products = dispatch => {
   fetch(`${domen}/products/all`)
      .then (res => res.json())
      .then (json => dispatch(load_products_action(json)))
}