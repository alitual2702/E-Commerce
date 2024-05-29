import React from 'react'
import './prod-one.css'
import Promo from './Promo'
const Productone = () => {
  return (
    <section className="collection">
   <Promo promoClass="left" promoName="crazy deals" promoTitle="buy 1 get 1 free" promoLink="Learn More"/>
   <Promo promoClass="right" promoName="spring/summer" promoTitle="upcomming season" promoLink="Collection"/>
  </section>
  )
}

export default Productone