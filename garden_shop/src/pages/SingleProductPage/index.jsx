import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { get_single_product } from '../../requests/products';
import SingleProduct from '../../components/SingleProduct';


export default function SingleProductPage() {


   const { id } = useParams();
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(get_single_product(id))
   }, []);

   const single_product = useSelector(store => store.single_product);

   return (
      <div>
         {
            single_product.map(el => <SingleProduct key={el.id} {...el}/>)
         }
      </div>
   )
}
