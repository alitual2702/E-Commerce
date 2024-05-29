import React from 'react'

const Cat_items = ({catDiscription , catImg }) => {
  return (
    <div className="each-item">

      <img src={catImg} alt="" className="itemwith-image" />
      <h3 className="item-caption captionone">{catDiscription}</h3>

    </div>
  )
}

export default Cat_items