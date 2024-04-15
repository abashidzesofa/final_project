const defaultState = JSON.parse(localStorage.getItem('cart')) || [];

const ADD_TO_CART = 'ADD_TO_CART';
const ADD_SINGLE_TO_CART = 'ADD_SINGLE_TO_CART'
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const INCR_ITEM = 'INCR_ITEM';
const DECR_ITEM = 'DECR_ITEM';
const CLEAR_CART = 'CLEAR_CART';

export const add_to_cart_action = product => ({type: ADD_TO_CART, payload: product});
export const add_single_to_cart_action = product => ({type: ADD_SINGLE_TO_CART, payload: product});
export const delete_cart_item_action = id => ({type: DELETE_CART_ITEM, payload: id});

export const incr_count_action = id => ({type: INCR_ITEM, payload: id});

export const decr_count_action = id => ({type: DECR_ITEM, payload: id});

export const clear_cart_action = () => ({type: CLEAR_CART})

const check_product = (state, payload) => {
   const product_in_state = state.find(el => el.id === payload.id);
   if(product_in_state) {
      product_in_state.count ++
      return [...state]
   } 
   else {
      return [...state, {...payload, count: 1}]
   }
}
const check_single_product = (state, payload) => {
   let product_in_state = state.find(el => el.id === payload.id);
   if(product_in_state) {
      product_in_state += payload.count
      return [...state]
   }
   else {
      return [...state, {...payload}]
   }
}


export const cart_reducer = (state = defaultState, action) => {

   if(action.type === ADD_TO_CART) {
      return check_product(state, action.payload)
   } else if (action.type === ADD_SINGLE_TO_CART) {
      return check_single_product(state, action.payload)
   }
   else if (action.type === DELETE_CART_ITEM) {
      return state.filter(el => el.id !== action.payload);

   } else if (action.type === INCR_ITEM) {
    // 1. Найти карточку, у которой увеличиваем count
    // 2. У найденной карточки {} обращаемся к count и увеличиваем на единицу
    // 3. Возвращаем обновленное состояние  
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
         return [...state]
      } else if (action.type === CLEAR_CART) {
         return [];
      }
   return state
}