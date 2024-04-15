import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../../requests/products';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import { sort_products_action } from '../../store/reducers/products_reducer';
import { get_check_products_action } from '../../store/reducers/products_reducer';

export default function AllProductsPage() {
   
   const dispatch = useDispatch();

   
   const all_products_data = useSelector(store => store.products);
   // console.log(all_products_data);
   
   useEffect(() => {
      dispatch(get_products)
   }, []);
   const [checked, setChecked] = useState(false);
   const handle_check = () => setChecked(!checked);
   // console.log(checked);
   const handle_click = e => dispatch(get_check_products_action(e.target.checked));

   const order = event => {
      dispatch(sort_products_action(event.target.value));
   }

      console.log(all_products_data);

   return (
      <div className={[s.all_products_page, 'wrapper'].join(' ')}>
         <section className={s.buttons}>
         <Link to='/'>
               <div className={s.main_page_button}> Main page </div>
            </Link>
            <div className={s.buttons_line}></div>
            <Link to='/products'>
               <div className={s.all_products_button}> All products </div>
            </Link>
         </section>
         <h2> All products </h2>
         <section className={s.sort_forms}>
            <div>
            </div>
            <div className={s.checked}>
               <label>
                  <span>Discounted items</span>
                  <input type="checkbox" checked={checked} onChange={handle_check} onClick={handle_click}/>
               </label>
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
         <section className={s.cards_container}>
            {
               all_products_data
               .filter(el => el.visible === true)
               .map(el => <ProductCard key={el.id} {...el}/> )
            }
         </section>
      </div>
   )
}

