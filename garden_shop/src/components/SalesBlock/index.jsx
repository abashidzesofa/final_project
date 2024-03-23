import React, { useEffect } from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../../requests/products';
import SalesCard from '../SalesCard';

export default function SalesBlock() {

   const dispatch = useDispatch();

   
const products_data = useSelector(store => store.products);
console.log(products_data);

useEffect(() => {
   dispatch(get_products)
}, [dispatch]);
   return (
      <section className={['wrapper', s.sales_block].join(' ')}>
         <div className={s.sales_head}>
            <h4>Sale</h4>
            <div className={s.sales_line}></div>
            <div> All sales </div>
         </div>
            <div className={s.sales_container}>
               {
                  products_data
                  .filter(el => el.discont_price !== null)
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 4)
                  .map(el => <SalesCard key={el.id} {...el}/>)
               }
            </div>
         
      </section>
   )
}
