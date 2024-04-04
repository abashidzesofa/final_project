import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrCountAction, deleteToCartAction, incrCountAction } from '../../store/reducers/cart_reducer'

export default function CartItems({id, image, title, price, count}) {

    const dispatch = useDispatch()

  return (
    <div className={s.cart}>
        <img src={image} alt={title} />
        <p>Title: {title}</p>
        <p>Price: {price*count} $</p>
        <div>
            <p>{count}</p>
            <button onClick = {()=>dispatch(incrCountAction(id))}>+</button>
            <button onClick = {()=>dispatch(decrCountAction(id))}>-</button>

        </div>
        <p onClick={()=>dispatch(deleteToCartAction(id))}>x</p>
        
    </div>
  )
}
