import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_products } from '../../requests/products';
import SalesCard from '../../components/SalesCard';
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { sort_products_action } from '../../store/reducers/products_reducer';
export default function SalesPage() {

   const dispatch = useDispatch();

   
   const products_data = useSelector(store => store.products);
   // console.log(products_data);
   
   useEffect(() => {
      dispatch(get_products)
   }, []);

   const order = event => {
      dispatch(sort_products_action(event.target.value));
   }

   return (
      <div className={[s.sales_page_container, 'wrapper'].join(' ')}>
         <section className={s.buttons}>
            <Link to='/'>
                  <div className={s.main_page_button}> Main page </div>
               </Link>
               <div className={s.buttons_line}></div>
               <Link to='/sales'>
                  <div className={s.all_sales_button}> All sales </div>
               </Link>
            </section>
            <p className={s.title}> Discounted Items </p>
            <section className={s.sales_sort_forms}>
               <div>

               </div>
            <div className={s.sorted}>
               <span>Sorted</span>
               <select onInput={order}>
                  <option value="default" defaultValue>By default</option>
                  <option value="name">By name (A-Z)</option>
                  <option value="price_asc">By price (ASC)</option>
                  <option value="price_desc">By price (DESC)</option>
               </select>
            </div>
         </section>
         <section className={s.sales_cards_container}>
            {
               products_data
               .filter(el => el.discont_price !== null)
               .map(el => <SalesCard key={el.id} {...el}/>)
            }
         </section>
      </div>
   )
}
