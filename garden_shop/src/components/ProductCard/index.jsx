import React from 'react'
import s from './index.module.css'
import { domen } from '../../requests/categories'
import { Link } from 'react-router-dom';

export default function ProductCard({ image, title, price, discont_price, id}) {
   const class_name = discont_price === null ? s.without_sale : s.with_sale;
   const class_name_discount = discont_price === null ? s.without_discount : s.with_discount;
   const img = domen + image;
   const discount_percentage = Math.floor(((discont_price - price) / discont_price) * 100);
   const ceil_price = Math.ceil(price);
   return (
      <Link to={`/product/${id}`}>
         <div className={s.product_by_category}>
            <div className={s.imgs_block}>
               <img src={ img } alt={ title } className={s.product_by_category_img}/>
               <div className={class_name}> { discount_percentage}% </div> 
               <button className={s.button_on_hover}>Add to cart</button>
            </div>
            <div className={s.descr_block}>
               <p>{ title } </p>
               <div className={s.price_block}>
               <p> ${ ceil_price } </p>
               <p className={[class_name_discount].join(' ')}> ${ discont_price } </p>
               </div>
            </div>
         </div>
      </Link>
   )
}
