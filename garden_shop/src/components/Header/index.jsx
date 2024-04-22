import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo_plant from './images/plant.png'
import logo_ground from './images/ground.png'
import cart_icon from './images/icon.png'
import { useSelector } from 'react-redux'

export default function Header() {

   const cart_state = useSelector(store => store.cart);
   console.log(cart_state);
   const total_count = cart_state.reduce((acc, el) => acc + (el.count), 0)
   console.log(total_count);

   return (
      <section className={[s.header, 'wrapper'].join(' ')}>
         <div className={s.logo_container}>
            <img src={ logo_plant } alt="logo"/>
            <img src={ logo_ground } alt="logo"/>
         </div>
         <div className={s.nav_menu}>
            <Link to='/'> Main Page </Link>
            <Link to='/categories'> Categories </Link>
            <Link to='/products'> All Products</Link>
            <Link to='/sales'> All Sales </Link>
         </div>
         <Link to='/cart'>
            <div className={s.cart_icon}>
               <img src={cart_icon} alt="cart icon"/>
               <div>
                  <p>{total_count}</p>
               </div>
            </div>
         </Link>

      </section>
   )
}