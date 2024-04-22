import React from 'react'
import s from './index.module.css'
import error_img from './404.png'
import { Link } from 'react-router-dom'
export default function NotFoundPage() {
   return (
      
      <div className={s.error_container}>
         <img src={error_img} alt="error" />
         <h4>Page Not Found</h4>
         <p>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
         <Link to='/'>
            <button> Go Home </button>
         </Link>
      </div>
   )
}
