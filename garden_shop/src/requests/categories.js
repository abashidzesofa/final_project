import { load_categories_action } from '../store/reducers/categories_reducer'


export const domen = 'http://localhost:3333';


export const get_categories = dispatch => {
   fetch(`${domen}/categories/all`)
      .then (res => res.json())
      .then (json => dispatch(load_categories_action(json)))
}