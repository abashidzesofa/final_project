import React from 'react'
import s from './index.module.css'
import banner_img from './banner_products.jpg'
import { Link } from 'react-router-dom'

export default function Banner() {


const banner_styles = {
   backgroundImage: `url('${banner_img}')`
}


  return (
    <div className={s.banner} style={banner_styles}>
     <div className={s.title}>
    <h1>Amazing Discounts on Garden Products!</h1>
    <Link to='/sales'>
      <button>Check out</button>
    </Link>
    </div>
   </div>
  )
}
