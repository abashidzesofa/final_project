import React from 'react'
import s from './index.module.css'
import { domen } from '../../requests/categories'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cart_reducer'

export default function SalesCard({ image, title, discont_price, price, id, count }) {

   const dispatch = useDispatch();

   const img = domen + image;
   const discount_percentage = Math.floor(((discont_price - price) / discont_price) * 100);
   const new_price = price.toFixed(1);
   const new_discont = discont_price.toFixed(1);

   return (
      <div className={s.sales_card_container}>
      <Link to={`/product/${id}`}>
         <div className={s.sale_card}> 
            <div className={s.img_block}>
            
               <img src={ img } alt={ title } className={s.sales_img}/>
               <div> { discount_percentage}% </div> 
               
            </div>
            <div className={s.description_block}>
               <p> { title } </p>
               <div className={s.price_block}>
                  <p> ${ new_discont }</p> 
                  <p> ${ new_price }</p>
               </div>
            </div>
         </div>
      </Link>
      <button className={s.button_on_hover} onClick={() => dispatch(addToCartAction({id, image, title, price, discont_price, count}))}>Add to cart</button>
      </div>
   )
}
