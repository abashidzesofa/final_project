import React from 'react'
import CartItems from '../CartItems'
import s from './index.module.css'
import { useSelector } from 'react-redux'

export default function CartContainer() {

    const cartState = useSelector(store=>store.cart)

  return (
    <div className={s.container}>{
        cartState.map(el=><CartItems key={el.id} {...el}/>)
    }
    </div>
  )
}
