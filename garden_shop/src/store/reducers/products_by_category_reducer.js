const defaultState = {};

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';

export const load_products_by_categories_action = products => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: products});

export const products_by_category_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_PRODUCTS_BY_CATEGORY) {

      return action.payload
   }
   return state
}