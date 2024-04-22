import React from 'react'
import { domen } from '../../requests/categories'
import s from './index.module.css'
import { Link } from 'react-router-dom'



export default function CategoriesPageCard({image, title, id}) {

   const img = domen + image;
   return (
      <Link to={`/products/${id}`}>
         <div className={s.categories}>
            <img src={img} alt={title} className={s.categories_img}/>
            <div className={s.categories_title}> { title } </div>
         </div>
      </Link>
   )
}
