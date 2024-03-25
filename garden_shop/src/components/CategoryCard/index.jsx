import React from 'react'
import s from './index.module.css'
import { domen } from '../../requests/categories'
import { Link } from 'react-router-dom';

export default function CategoryCard( {image, title, id} ) {
   
   const img = domen + image;
   
   return (
      <Link to={`/products/${id}`}>
         <div className={s.category_card}>
            <img src={img} alt={title} className={s.categories_img} />
            <p className={s.title}> {title} </p>
         </div>
      </Link>
   )
}
