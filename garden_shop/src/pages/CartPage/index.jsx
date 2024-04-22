
import React from 'react'
import CartContainer from '../../components/CartContainer'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { domen } from '../../requests/categories';
import s from './index.module.css';
import { Link } from 'react-router-dom';





export default function CartPage({open_modal}) {

   const dispatch=useDispatch();
   
   const cartState = useSelector(store=>store.cart)
   useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cartState))
    }, [cartState]);

    

    const totalItems=new Set(cartState.map(item => item.id)).size;



    

    const totalPrice=cartState.reduce((acc, el)=> {
      const price=el.discont_price? el.discont_price: el.price;
      return acc + (price * el.count);}, 0);

    const emptyCart=cartState.length===0 ? s.empty :s.not_empty  

    const orderDetails=event=> {
      event.preventDefault();
      const { name, phone_number, mail } = event.target;
      const details_user = {
         id: Date.now(),
         name: name.value,
         number: phone_number.value,
         mail: mail.value

    } 

    const postDetails=details_user=>{
      fetch(`${domen}/order/send`, {
        method: 'POST',
        body: JSON.stringify(details_user),
        headers: {'Content-Type': 'application/json;charset=utf-8'}
     })
        .then(res => res.json())
        .then(json => console.log(json))
  }
        postDetails(details_user);
        event.target.reset()
     }
    

     
  //  console.log (cartState)
   return (

    <section className={['wrapper', s.section_carts].join(' ')}> 

      <div className={s.cart_page}>
        <div>
            <h2>Shopping cart</h2>
            <div className={s.buttons}>
               <div className={s.buttons_line}></div>
               <Link to='/'>
                  <div className={s.main_page_button}> Back to the store </div>
               </Link>
               </div>
            </div>
       </div>
     <div className={s.section_cart}>
        
       <div>
      {
        cartState.length === 0
        ? <div>
          <p className={s.messege}> Looks like you have no items in your basket currently. </p>
          <Link to='/'>
          <button className={s.button_shopping}>Continue Shopping</button></Link>
          </div>
        :<CartContainer/>
      }
      </div>
    
      <div className={[s.forms, emptyCart].join(' ')}>
      
   

    <div className={s.orders}>
    <h3>Orders details</h3>   
    <p className={s.items}>{totalItems} items</p>
    <p className={s.price}>
      <span>Total</span>
      ${totalPrice.toFixed(2)}</p>
    </div>

    <form  className={s.form} onSubmit={orderDetails}>
        <input  type='text' placeholder='Name' name='name'/>
        <input   type='tel' placeholder='Phone number' name='phone_number'/>
        <input   type='email' placeholder='Email' name='mail'/>
        <button onClick={open_modal}> Order </button>
    </form>
   </div>
   
   
  </div>
  

  </section>
  

   )
}
