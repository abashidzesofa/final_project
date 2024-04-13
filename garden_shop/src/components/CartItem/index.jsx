import React from 'react'
import s from './index.module.css'
import { decr_count_action, delete_cart_item_action, incr_count_action } from '../../store/reducers/cart_reducer'
import { useDispatch } from 'react-redux'
import { domen } from '../../requests/categories'

export default function CartItem({id, image, title, price, count}) {
   
   const dispatch = useDispatch();
   
   const img = domen + image;
   return (
      <div className={s.cart_item}>
         <img src={ img } alt={ title } />
         <p> { title } </p>
         <p> { price * count } </p>
         <div>
            <p> { count }</p>
            <button onClick={() => dispatch(decr_count_action(id))}> - </button>
            <button onClick={() => dispatch(incr_count_action(id))}> + </button>
         </div>
         <p onClick={() => dispatch(delete_cart_item_action(id))}> X </p>
      </div>
   )
}
