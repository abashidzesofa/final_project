import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../../requests/products';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';
import { Link } from 'react-router-dom';


// осталось сделать сортировку и фильтрацию 
export default function AllProductsPage() {
   
   const dispatch = useDispatch();

   
   const all_products_data = useSelector(store => store.products);
   console.log();
   
   useEffect(() => {
      dispatch(get_products)
   }, []);



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
         <section className={s.sort_block}> SORT </section>
         <section className={s.cards_container}>
            {
               all_products_data.map(el => <ProductCard key={el.id} {...el}/> )
            }
         </section>
      </div>
   )
}
