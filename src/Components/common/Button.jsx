import React from "react";
import "../../styles/components/Button.css";

const Button = ({ onClick, text }) => {
  return (
    <button className="small-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
