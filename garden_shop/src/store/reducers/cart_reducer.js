
const defaultState=JSON.parse(localStorage.getItem('cart')) || [];

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const INCR_COUNT = 'INCR_COUNT';
const DECR_COUNT = 'DECR_COUNT';
const CLEAR_CART = 'CLEAR_CART'
const ADD_SINGLE_TO_CART = 'ADD_SINGLE_TO_CART'

export const add_single_to_cart_action = product => ({type: ADD_SINGLE_TO_CART, payload: product});


export const addToCartAction = (product)=>({
    type: ADD_TO_CART, payload: product
})

export const deleteToCartAction = (id)=>({
    type: DELETE_CART_ITEM, payload: id
})

export const incrCountAction = (id)=>({
    type: INCR_COUNT, payload: id
})

export const decrCountAction = (id)=>({
    type: DECR_COUNT, payload: id
})

export const clearCartAction = ()=>({
    type: CLEAR_CART
})

const checkProduct = (state, payload) => {
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

export const cartReducer = (state = defaultState, action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  }else if (action.type === ADD_SINGLE_TO_CART) {
    return check_single_product(state, action.payload)
 }else if(action.type === DELETE_CART_ITEM){
    return state.filter( el=> el.id !==action.payload)
  }else if(action.type ===INCR_COUNT){
    const newCart = state.find(el =>el.id===action.payload)
    newCart.count++
    return [...state]
  }else if (action.type === DECR_COUNT){
    const newCart=state.find(el=> el.id===action.payload)
    if(newCart.count===1){
        state=state.filter(el=>el.id!==action.payload)
    }else{newCart.count--
    }
    return [...state]
  }else if(action.type===CLEAR_CART){
    return []
  }
  return state
}
