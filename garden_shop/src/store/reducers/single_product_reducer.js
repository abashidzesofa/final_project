const defaultState = [];

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';

export const load_single_product_action = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product});

export const single_products_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_SINGLE_PRODUCT) {
      return action.payload
   }
   
   return state
}