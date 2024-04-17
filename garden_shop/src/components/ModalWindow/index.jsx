import React from 'react'
import s from './index.module.css'

export default function ModalWindow({close_modal, modalActive}) {
   return (
      <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
         <div className={s.modal_content}>
            <span onClick={close_modal}>x</span>
            <p>Congratulations!</p>
            <p>Your order has been successfully placed on the website. A manager will contact you shortly to confirm your order.</p>
         </div>
      </div>
   )
}
