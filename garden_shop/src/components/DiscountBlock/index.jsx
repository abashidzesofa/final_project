import React from 'react'
import s from './index.module.css'
import { domen } from "../../requests/categories"



export default function DiscountBlock() {

   const add_discount_user = (event) => {
      event.preventDefault();
      const { name, phone_number, mail } = event.target;
      const discount_user = {
         id: Date.now(),
         name: name.value,
         number: phone_number.value,
         mail: mail.value
      }
   
   const post_discount = discount_user => {
   fetch(`${domen}/sale/send`, {
      method: 'POST',
      body: JSON.stringify(discount_user),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
   })
      .then(res => res.json())
      .then(json => console.log(json))
}
      post_discount(discount_user);
      event.target.reset()
   }
   

   return (
      <section className={['wrapper', s.discount_block].join(' ')}>
      <h3>5 % off on the first order</h3>
      <form onSubmit={add_discount_user}>
         <input type='text' placeholder='Name' name='name'/>
         <input type='text' placeholder='Phone number' name='phone_number'/>
         <input type='text' placeholder='Email' name='mail'/>
         <button>Get a discount</button>
      </form>
   </section>
   )
}
