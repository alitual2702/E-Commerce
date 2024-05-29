import React from 'react'

const FooterLinks = ({f_Name , footer_link_1 ,footer_link_2,footer_link_3,footer_link_4,footer_link_5}) => {
  return (
    <div className="footer-flex-bottoms flex-width flex-mob">
    <p className="footer-about">
      <strong>{f_Name}</strong>
    </p>

    <div className="about-all-links">
      <a href="#" className="footer-about-links">
        {footer_link_1}
      </a>
      <a href="#" className="footer-about-links">
        {footer_link_2}
      </a>
      <a href="#" className="footer-about-links">
        {footer_link_3}
      </a>
      <a href="#" className="footer-about-links">
        {footer_link_4}
      </a>
      <a href="#" className="footer-about-links">
        {footer_link_5}
      </a>
    </div>
  </div>
  )
}

export default FooterLinks