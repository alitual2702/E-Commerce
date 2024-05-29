import React from "react";

const Banners = ({ bannClass, bannTitle, bannDis }) => {
  return (
    <div className={`${bannClass} ancoll`}>
      <h2 className="another-title">{bannTitle}</h2>
      <h3 className="another-discription">{bannDis}</h3>
    </div>
  );
};

export default Banners;
