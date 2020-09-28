import React from "react";
import "./style.css";
const Card = ({ children, width, ...rest }) => {
  return (
    <div className="card" style={{ width: width ? width : "100%" }} {...rest}>
      {children}
    </div>
  );
};

export default Card;
