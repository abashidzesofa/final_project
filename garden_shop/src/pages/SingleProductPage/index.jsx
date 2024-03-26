import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { get_single_product } from '../../requests/products';
import { domen } from '../../requests/categories';

export default function SingleProductPage() {


   const { id } = useParams();
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(get_single_product(id))
   }, []);

   const single_product = useSelector(store => store.single_product);

   console.log(single_product);;
   const { image, title, description, price, categoryID, discont_price } = single_product;

   const img = domen + image;
   return (
      <div>
         <img src={ img } alt={single_product.title} />
      </div>
   )
}
