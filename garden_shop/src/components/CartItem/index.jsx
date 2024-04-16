import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decr_count_action, delete_cart_item_action, incr_count_action } from '../../store/reducers/cart_reducer'
import { domen } from '../../requests/categories'

export default function CartItems({id, image, title, price, count, discont_price}) {

    const dispatch = useDispatch()

    const class_name_discount = discont_price === null ? s.without_discount : s.with_discount; // для отображения цены (price)
    const new_price = discont_price === null? price : discont_price; // для тех карточек, у которых нет скидки
    const img=domen+image

  return (
    <div className={s.cart}>
        <img className={s.img} src={img} alt={title} />
        <div className={s.box}>
          <div className={s.title_block}>
           <p>{title}</p>
           <p className={s.remove} onClick={()=>dispatch(delete_cart_item_action(id))}>x</p>
         </div>

         <div className={s.buttons_block}>

           <button className={s.button} onClick = {()=>dispatch(decr_count_action(id))}>-</button>
            <p className={s.count}>{count}</p>
            <button className={s.button} onClick = {()=>dispatch(incr_count_action(id))}>+</button>
            <p className={s.price}> ${ new_price * count } </p>
               <p className={class_name_discount}> ${ price } </p>
         </div>

        </div>
    </div>
  )
}