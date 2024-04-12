const defaultState = [];

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
/*const INCR_COUNT_PRODUCT = 'INCR_COUNT_PRODUCT';*/





export const load_single_product_action = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product});
/*export const incrCountProductAction = product => ({ type: INCR_COUNT_PRODUCT, payload: product });*/




export const single_products_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_SINGLE_PRODUCT) {
      return action.payload
     /*return [{...action.payload, count: 0}]
   } else if(action.type === INCR_COUNT_PRODUCT){
     state.count++
     return [...state]*/
   }
   return state
}