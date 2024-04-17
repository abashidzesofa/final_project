import React, { useEffect } from 'react'
import CartItemsContainer from '../../components/CartItemsContainer'
import { useSelector, useDispatch } from 'react-redux'
import { clear_cart_action } from '../../store/reducers/cart_reducer';
import { Link } from 'react-router-dom';
import s from './index.module.css'

export default function CartPage({open_modal}) {
   const dispatch = useDispatch();

   const cart_state = useSelector(store => store.cart);
   // console.log(cart_state);

   const total_price = cart_state.reduce((acc, el) => {
      const price = el.discount_price ? el.discount_price : el.price;
      return acc + (price * el.count);
  }, 0);

  
   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart_state))
   }, [cart_state]);


   
   return (
      
      <div className={[s.cart_page, 'wrapper'].join(' ')}>
         <h2>Shopping cart</h2>
         <div className={s.buttons}>
            <div className={s.buttons_line}></div>
            <Link to='/'>
               <div className={s.main_page_button}> Back to the store </div>
            </Link>
         </div>
         
         {
            cart_state.length === 0 
            ? <p> The cart is empty </p>
            : <CartItemsContainer />
         }
         <p> Total: { total_price } $ </p>
         <button onClick={() => dispatch(clear_cart_action())}>Clear cart</button>
         
         <button onClick={open_modal}>Open modal</button>
      </div>
   )
}
