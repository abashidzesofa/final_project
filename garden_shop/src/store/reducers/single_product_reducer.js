const defaultState = [];

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
const INCR_ITEM = 'INCR_ITEM';
const DECR_ITEM = 'DECR_ITEM';


export const load_single_product_action = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product});
export const incr_count_action = id => ({type: INCR_ITEM, payload: id});
export const decr_count_action = id => ({type: DECR_ITEM, payload: id});

const check_product = (state, payload) => {
   const product_in_state = state.find(el => el.id === payload.id);
   if(product_in_state) {
      product_in_state.count ++
      return [...state]
   } else {
      return [...state, {...payload, count: 1}]
   }
}


export const single_products_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_SINGLE_PRODUCT) {
      return action.payload
   } else if (action.type === INCR_ITEM) {
      const target_card = state.find(el => el.id === action.payload)
      target_card.count++
      return [...state]
      
      } else if (action.type === DECR_ITEM) {
         const target_card = state.find(el => el.id === action.payload)
         if(target_card.count === 1) {
            state = state.filter(el => el.id !== action.payload);
         } else {
            target_card.count--
         }
         return [...state]}
   
   return state
}