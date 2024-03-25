const defaultState = [];

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const load_products_action = products => ({ type: LOAD_PRODUCTS, payload: products});

export const products_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_PRODUCTS) {
      return action.payload
   }
   
   return state
}