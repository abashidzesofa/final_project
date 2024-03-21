import React from 'react'
import s from './index.module.css'
import banner_img from './banner_products.jpg'

export default function Banner() {


const banner_styles = {
   backgroundImage: `url('${banner_img}')`
}


  return (
   <div className={[s.banner].join(' ')} style={banner_styles}>
  
     <div className={s.title}>
    <h1>Amazing Discounts on Garden Products!</h1>
    <button>Check out</button>
    </div>

    
   </div>
  )
}
