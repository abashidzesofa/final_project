import React from 'react'
import s from './index.module.css'

export default function ModalWindow({close_modal, modalActive}) {
    return (
       <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
          <div className={s.modal_content}>
             <span onClick={close_modal}>X</span>
             <h3>Congratulations!</h3>
             <p>Your order has been successfully placed on the website. </p>
             <p>A manager will contact you shortly to confirm your order.</p>
          </div>
       </div>
    )
 }
