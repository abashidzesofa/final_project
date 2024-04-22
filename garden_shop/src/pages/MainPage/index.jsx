import React from 'react';
import CategoriesBlock from '../../components/CategoriesBlock';
import DiscountBlock from '../../components/DiscountBlock';
import SalesBlock from '../../components/SalesBlock';
import Banner from '../../components/Banner';

export default function MainPage() {
   return (
      <div>
         <Banner/>
         <CategoriesBlock/>
         <DiscountBlock/>
         <SalesBlock/>
      </div>
   )
}
