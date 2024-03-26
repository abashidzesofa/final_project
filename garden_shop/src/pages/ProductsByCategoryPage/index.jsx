import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { get_products_by_category } from '../../requests/products';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

export default function ProductsByCategoryPage() {

   
   const dispatch = useDispatch();

   const { category_id } = useParams();

   useEffect(() => {
      dispatch(get_products_by_category(category_id))
   }, []);

   const products_by_category_state = useSelector(store => store.products_by_category)
   
   const {category, data} = products_by_category_state;

   console.log(products_by_category_state)

   return (

      <div className={['wrapper'].join(' ')}>

         <section className={s.buttons}>
            <Link to='/'>
                  <div className={s.main_page_button}>Main page</div>
               </Link>
               <div className={s.buttons_line}></div>
               <Link to='/categories'>
                  <div className={s.categories_button}>Categories</div>
               </Link>
               <div className={s.buttons_second_line}></div>
               <Link to={`/products/${category ? category.id : 'loading...'}`}> 
                  <div className={s.products_by_category_button}> { category ? category.title : 'loading...' } </div> 
               </Link>
            </section>
         <h2 className={s.products_by_category_h2}>
            {
               category ? category.title : 'Loading...'
            }
         </h2>

         <section className={s.sort_forms}>
            Sort Forms
         </section>
         <section className={s.cards_container}>
         {
            data&&data.map(el => <ProductCard key={el.id} {...el} />)
         }
         </section>

      </div>
   )
}



