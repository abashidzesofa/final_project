import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    
    <section className={[s.section, 'wrapper'].join(' ')}>
      <h2 className={s.h2}>Contact</h2>
    <div className={s.contact}>
      <div className={s.link_card_phone}>
        <p className={s.small}>Phone</p>
        <p className={s.p}>+49 999 999 99 99</p>

      </div>

      <div className={s.right_card_socials}>
       <p className={s.small}>Socials</p>
       <p className={s.p}></p>

      </div>

      <div className={s.link_card_adress}>
       <p className={s.small}>Adresse</p>
       <p className={s.p}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>

      </div>

      <div className={s.right_card_hours}>
       <p className={s.small}>Working Hours</p>
       <p className={s.p}>24 hours a day</p>

      </div>
    </div>
    
    </section>
  )
}

