import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_categories } from '../../requests/categories';
import { Link } from 'react-router-dom';
import s from './index.module.css'
import { domen } from '../../requests/categories';

export default function SingleProduct({ id, categoryId, title, image, price, discont_price, description }) {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(get_categories)
   },  []);

   const categories_data = useSelector(store => store.categories);

   const get_category_title = categoryId => {
      const category = categories_data.find(el => el.id === categoryId);
      return category ? category.title : 'Loading...';
   }
   const img = domen + image;

   const class_name = discont_price === null ? s.without_sale : s.with_sale; 
   const class_name_discount = discont_price === null ? s.without_discount : s.with_discount; 
   const new_price = discont_price === null? price : discont_price;
   const discount_percentage = Math.floor(((discont_price - price) / discont_price) * 100);
   return (
      <div className='wrapper'>
         <section className={s.buttons}>
            <Link to='/'>
               <div className={s.main_page_button}> Main page </div>
            </Link>
               <div className={s.buttons_line}></div>
            <Link to='/categories'>
               <div className={s.categories_button}> Categories </div>
            </Link>
               <div className={s.buttons_line_two}></div>
            <Link to={`/products/${categoryId}`}>
               <div className={s.category_title_button}>{categories_data.length > 0 ? get_category_title(categoryId) : 'Loading...'}</div>
            </Link>
               <div className={s.buttons_line_three}></div> 
            <Link to={`/product/${id}`}>
               <div className={s.title_button}> { title } </div>
            </Link>
         </section>
         <section className={s.single_card}>
            <img src={ img } alt={ title } />
            <div className={s.about_block}>
               <p> { title } </p>
               <div className={s.price_block}>
                  <p> $ {new_price} </p>
                  <p className={class_name_discount}> ${ price } </p>
                  <p className={class_name}> { discount_percentage }% </p>
               </div>
               <div className={s.cart_block}>
                  <div className={s.count_block}>
                     <button> - </button>
                     {/* <p> { count }</p> */}
                     <button> + </button>
                  </div>
                  <div className={s.add_to_cart}>
                     <button> Add to cart </button>
                  </div>
            </div>
            <div className={s.description_block}>
               <p> Description </p>
               <p> { description } </p>
               <p> Read more </p>
            </div>
            </div>
         </section>
      </div>
   )
}
