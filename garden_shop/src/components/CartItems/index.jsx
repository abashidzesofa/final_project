import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrCountAction, deleteToCartAction, incrCountAction } from '../../store/reducers/cart_reducer'
import { domen } from '../../requests/categories'

export default function CartItems({id, image, title, price, count}) {

    const img=domen+image;

    const dispatch = useDispatch()

  return (
    <div className={s.cart}>
        <img className={s.img} src={img} alt={title} />
        <div className={s.header}>
        <p>{title}</p>
        <p onClick={()=>dispatch(deleteToCartAction(id))}>x</p>
        </div>
       
        <div className={s.button_block}>
            
            <button className={s.button_one} onClick = {()=>dispatch(incrCountAction(id))}>+</button>
            <p className={s.count}>{count}</p>
            <button className={s.button_one} onClick = {()=>dispatch(decrCountAction(id))}>-</button>

        </div>
        <p className={s.price}>${price*count}</p>
        
        
    </div>
  )
}
