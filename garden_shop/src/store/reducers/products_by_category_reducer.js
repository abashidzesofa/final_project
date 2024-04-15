const defaultState = {};

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const GET_CHECK_PRODUCTS = 'GET_CHECK_PRODUCTS'
export const load_products_by_categories_action = products => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: products});
export const sort_products_action = value => ({ type: SORT_PRODUCTS, payload: value});
export const get_check_products_action = value => ({
   type: GET_CHECK_PRODUCTS, payload: value
})


export const products_by_category_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_PRODUCTS_BY_CATEGORY) {
      return action.payload
   // } else if (action.type === SORT_PRODUCTS) {
   //    if (action.payload === 'name') {
   //       state.sort((a, b) => a.title.localeCompare(b.title))
   //    } else if (action.payload === 'price_asc') {
   //       state.sort((a, b) => a.price - b.price)
   //    } else if ( action.payload === 'price_desc') {
   //       state.sort((a, b) => b.price - a.price)
   //    }
   //    return [...state]
   // } else if (action.type === GET_CHECK_PRODUCTS) {
   //    if(action.payload) {
   //       return state.map(el => {
   //          if(el.discont_price !== null) {
   //             el.visible = true
   //          } else if(el.discont_price === null) {
   //             el.visible = false
   //          }
   //          return el
   //       })
   //    } else {
   //       return state.map(el => {
   //          el.visible = true
   //          return el
   //       })
   //    }
   }
   return state
}