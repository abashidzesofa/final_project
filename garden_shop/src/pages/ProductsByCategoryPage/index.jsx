import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { get_products_by_category } from '../../requests/products';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import { sort_products_action } from '../../store/reducers/products_by_category_reducer'
import { get_check_products_action } from '../../store/reducers/products_by_category_reducer'

export default function ProductsByCategoryPage() {

   
   const dispatch = useDispatch();

   const [checked, setChecked] = useState(false);
   const handle_check = () => setChecked(!checked);
   console.log(checked);
   const handle_click = e => dispatch(get_check_products_action(e.target.checked))
   const { category_id } = useParams();

   useEffect(() => {
      dispatch(get_products_by_category(category_id))
   }, []);

   const products_by_category_state = useSelector(store => store.products_by_category)
   
   const {category, data} = products_by_category_state;

   // console.log(products_by_category_state);

   const order = event => {
      dispatch(sort_products_action(event.target.value));
   }

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
            <span>Sorted</span>
            <select onClick={order}>
               <option value="name">By name (A-Z)</option>
               <option value="price_asc">By price (ASC)</option>
               <option value="price_desc">By price (DESC)</option>
            </select>
            <label>
            <span>Disconted Items</span>
            <input type="checkbox" checked={checked} onChange={handle_check} onClick={handle_click}/>
         </label>
         </section>
         <section className={s.cards_container}>
         {
            data&&data
            .filter(el => el.visible === true)
            .map(el => <ProductCard key={el.id} {...el} />)
         }
         </section>

      </div>
   )
}



