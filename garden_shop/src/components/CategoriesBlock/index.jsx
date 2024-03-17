import React from 'react'
import s from './index.module.css'
import img_first from '../../images/fertilizer.png'
import img_second from '../../images/material.png'
import img_third from '../../images/septic_tanks.png'
import img_fourth from '../../images/tools.png'

export default function CategoriesBlock() {
   return (
      <section className={s.categories_block}>
         <div className={s.head}>
            <h2>Categories</h2>
            <hr />
            <div>All categories</div>
         </div>
         <ul>
            <li>
               <img src={img_first} alt="fertilizer" />
               <p>Fertilizer</p>
            </li>
            <li>
               <img src={img_second} alt="Protective products and septic tanks" />
               <p>Protective products and septic tanks</p>
            </li>
            <li>
               <img src={img_third} alt="Planting material	" />
               <p>Planting material	</p>
            </li>
            <li>
               <img src={img_fourth} alt="Tools and equipment" />
               <p>Tools and equipment</p>
            </li>
         </ul>
      </section>
   )
}
