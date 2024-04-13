import React, { useEffect } from 'react'
import CartItemsContainer from '../../components/CartItemsContainer'
import { useSelector, useDispatch } from 'react-redux'
import { clear_cart_action } from '../../store/reducers/cart_reducer';
import { useParams } from 'react-router-dom'

export default function CartPage() {
   const dispatch = useDispatch();
   const cart_state = useSelector(store => store.cart);
   console.log(cart_state);
   const total_price = cart_state.reduce((acc, el) => acc + (el.price * el.count), 0)

// записывает обновленное состояние в local storage
   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart_state))
   }, [cart_state]);


   
   return (
      <div>
         {
            cart_state.length === 0 
            ? <p> The cart is empty </p>
            : <CartItemsContainer />
         }
         <p> Total: { total_price } $ </p>
         <button onClick={() => dispatch(clear_cart_action())}>Clear cart</button>
      </div>
   )
}
