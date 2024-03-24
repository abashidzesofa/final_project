import React from 'react'
import CategoriesBlock from '../../components/CategoriesBlock'
import DiscountBlock from '../../components/DiscountBlock'
import SalesBlock from '../../components/SalesBlock'
import Header from '../../components/Header'

export default function MainPage() {
   return (
      <div>
         <Header/>
         <CategoriesBlock/>
         <DiscountBlock/>
         <SalesBlock/>
      </div>
   )
}
