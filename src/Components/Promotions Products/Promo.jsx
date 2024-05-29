import React from 'react'

const Promo = ({promoClass , promoName , promoTitle , promoLink}) => {
  return (
    <div className={promoClass}>
    <span className="collection-span">{promoName}</span>
    <h3 className="collection-offer">{promoTitle}</h3>
    <p className="collection-paragraph">
      The best classNameic dress is on sale at cara
    </p>
    <a href="#" className="collection-link">
      {promoLink}
    </a>
  </div>
  )
}

export default Promo