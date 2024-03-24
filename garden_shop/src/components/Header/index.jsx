import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo_plant from './images/plant.png'
import logo_ground from './images/ground.png'
import cart_icon from './images/icon.png'

export default function Header() {
   return (
      <section className={[s.header, 'wrapper'].join(' ')}>
         <div className={s.logo_container}>
            <img src={ logo_plant } alt="logo" className={s.plant_img}/>
            <img src={ logo_ground } alt="logo" className={s.ground_img}/>
         </div>
         <div className={s.nav_menu}>
            <Link to='/'> Main Page </Link>
            <Link to='/categories'> Categories </Link>
            <Link to='/products'> All Products</Link>
            <Link to='/sales'> All Sales </Link>
         </div>
         <Link to='/cart'>
            <div className={s.cart_icon}>
               <img src={cart_icon} alt="cart icon" className={s.cart_img}/>
            </div>
         </Link>
         
      </section>
   )
}