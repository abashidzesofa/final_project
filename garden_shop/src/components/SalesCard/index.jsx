import React from 'react'
import s from './index.module.css'
import { domen } from '../../requests/categories'
import { Link } from 'react-router-dom';

export default function SalesCard({ image, title, discont_price, price, id }) {

   const img = domen + image;
   const discount_percentage = Math.floor(((discont_price - price) / discont_price) * 100);
   const ceil_price = Math.ceil(price);
   return (
      <Link to={`/product/${id}`}>
         <div className={s.sale_card}> 
            <div className={s.img_block}>
            <button className={s.button_on_hover}>Add to cart</button>
               <img src={ img } alt={ title } className={s.sales_img}/>
               <div> { discount_percentage}% </div> 
               
            </div>
            <div className={s.description_block}>
               <p> { title } </p>
               <div className={s.price_block}>
                  <p> ${ ceil_price }</p> 
                  <p> ${ discont_price }</p>
               </div>
            </div>
         </div>
      </Link>
   )
}
