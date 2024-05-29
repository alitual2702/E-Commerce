import React from 'react'
import './prod-two.css'
import Banners from './Banners'
const Producttwo = () => {
  return (
    <section className="another-images">
      <Banners bannClass="another-left-div" bannTitle="SEASONAL SALE" bannDis="Winter Collection -50% OFF"/>
      <Banners  bannClass="another-bottom-div" bannTitle="NEW FOOTWEAR COLLECTION" bannDis="Spring / Summer 2022"/>
      <Banners  bannClass="another-right-div" bannTitle="T-SHIRTS" bannDis="New Trendy Prints"/>
  </section>
  )
}

export default Producttwo