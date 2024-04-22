import React from 'react'
import s from './index.module.css'
import { domen } from '../../requests/categories'
import { Link } from 'react-router-dom';
import { addToCartAction } from '../../store/reducers/cart_reducer';
import { useDispatch } from 'react-redux';

export default function ProductCard({ image, title, price, discont_price, id, count}) {

   const dispatch = useDispatch();
   const class_name = discont_price === null ? s.without_sale : s.with_sale; //  для контейнера со скидкой(%)
   const class_name_discount = discont_price === null ? s.without_discount : s.with_discount; // для отображения цены (price)
   const new_price = discont_price === null? price : discont_price; // для тех карточек, у которых нет скидки

   const img = domen + image;
   const discount_percentage = Math.floor(((discont_price - price) / discont_price) * 100);

   return (
      <div className={s.product_card_container}>
      <Link to={`/product/${id}`}>
         <div className={s.product_by_category}>
            <div className={s.imgs_block}>
               <img src={ img } alt={ title }/>
               <div className={class_name}> { discount_percentage}% </div> 
            </div>
            <div className={s.descr_block}>
               <p>{ title } </p>
               <div className={s.price_block}>
               <p > ${ new_price } </p>
               <p className={class_name_discount}> ${ price } </p>
               
               </div>
            </div>
            </div>
      </Link>
      <button className={s.button_on_hover} onClick={() => dispatch(addToCartAction({id, image, title, count, price, discont_price}))}>Add to cart</button>
      </div>

   )
}
