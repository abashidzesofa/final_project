const defaultState = [];

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const LOAD_SORT_PRODUCTS = 'LOAD_SORT_PRODUCTS';
const GET_CHECK_PRODUCTS = 'GET_CHECK_PRODUCTS';

export const load_products_action = products => ({ type: LOAD_PRODUCTS, payload: products});
export const sort_products_action = value => ({type: LOAD_SORT_PRODUCTS, payload: value});
export const get_check_products_action = value => ({
   type: GET_CHECK_PRODUCTS, payload: value
})

export const products_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_PRODUCTS) {
      return action.payload.map(el => ({...el, visible: true}))
   }
   else if (action.type === LOAD_SORT_PRODUCTS) {
      if (action.payload === 'name') {
         state.sort((a, b) => a.title.localeCompare(b.title))
      } else if(action.payload === 'price_asc') {
         state.sort((a, b) => a.price - b.price)
      } else if(action.payload === 'price_desc') {
         state.sort((a, b) => b.price - a.price)
      }
      return [...state]
   }else if (action.type === GET_CHECK_PRODUCTS) {
      if(action.payload) {
         return state.map(el => {
            if(el.discont_price !== null) {
               el.visible = true
            } else if(el.discont_price === null) {
               el.visible = false
            }
            return el
         })
      } else {
         return state.map(el => {
            el.visible = true
            return el
         })
      }
   }
   return state
}