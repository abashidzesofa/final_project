import React, { useEffect } from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from '../CategoryCard';
import { get_categories } from '../../requests/categories';

// осталось стилизовать линию и блок завершен

export default function CategoriesBlock() {

   const dispatch = useDispatch();

   
const categories_data = useSelector(store => store.categories);
console.log(categories_data);

useEffect(() => {
   dispatch(get_categories)
}, [dispatch]);

   return (
      <section  className={[s.categories_block, 'wrapper'].join(' ')}>
         <div className={s.head}>
            <h2>Categories</h2>
            <div className={s.line}></div>
            <div> All categories</div>
         </div>
         <div className={s.categories_container}>
            {
                  
               categories_data.filter(el => el.id !== 4).map(el => <CategoryCard key={el.id} {...el}/>)
                  
            }
         </div>
      
      </section>
   )
}
