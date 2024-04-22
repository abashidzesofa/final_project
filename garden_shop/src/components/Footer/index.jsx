import React from 'react'
import s from './index.module.css'
import instagram from './instagram.png'
import whatsapp from './whatsapp.png'

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
          <a href="https://www.instagram.com" target="_blank"> 
            <img className={s.instagram} src={instagram} alt="instagram" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <img  className={s.whatsapp} src={whatsapp} alt="whatsapp" />
          </a>
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
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409556617839!2d13.372520477246768!3d52.50792683712267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1711364878115!5m2!1sru!2sde"  className={s.map}></iframe>
    </div>
    </section>
  )
}

