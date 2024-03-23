import React from 'react'
import CategoriesBlock from '../../components/CategoriesBlock'
import DiscountBlock from '../../components/DiscountBlock'
import SalesBlock from '../../components/SalesBlock'

export default function MainPage() {
   return (
      <div>
         <CategoriesBlock/>
         <DiscountBlock/>
         <SalesBlock/>
      </div>
   )
}
