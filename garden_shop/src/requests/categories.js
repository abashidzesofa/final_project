import { load_categories_action } from '../store/reducers/categories_reducer'


export const domen = 'https://telran-project-backend-c3e9.onrender.com';


export const get_categories = dispatch => {
   fetch(`${domen}/categories/all`)
      .then (res => res.json())
      .then (json => dispatch(load_categories_action(json)))
}


