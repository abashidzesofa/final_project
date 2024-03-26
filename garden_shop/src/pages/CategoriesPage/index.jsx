import React, { useEffect } from 'react'
import Header from '../../components/Header'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get_categories } from '../../requests/categories'
import CategoriesPageCard from '../../components/CategoriesPageCard'
import Footer from '../../components/Footer'

export default function CategoriesPage() {


   const dispatch = useDispatch();

   
   const categories_data = useSelector(store => store.categories);
   console.log(categories_data);
   
   useEffect(() => {
      dispatch(get_categories)
   }, [dispatch]);


   return (
      <div className={[s.categories_page, 'wrapper'].join(' ')}>
         <header>
            <Header/>
         </header>
         
         <section className={s.buttons}>
            <Link to='/'>
               <div className={s.main_page_button}>Main page</div>
            </Link>
            <div className={s.buttons_line}></div>
            <Link to='/categories'>
               <div className={s.categories_button}>Categories</div>
            </Link>
         </section>
         <section className={s.categories}>
            <h2 className={s.categories_page_h2}> Categories </h2>
            
            <div className={s.categories_page_container}>
               {
                  categories_data.map(el => <CategoriesPageCard key={el.id} {...el}/>)
               }
            </div>
            <footer>
               <Footer/>
            </footer>
            
         </section>
      </div>
   )
}
