import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'
import s from './index.module.css'

export default function CartItemsContainer() {

   const cart_state = useSelector(store => store.cart)
   console.log(cart_state)
   return (
      <div className={s.items_container}>
         {
            cart_state.map(el => <CartItem key={el.id} {...el}/>)
         }
      </div>
   )
}
