import React from "react";
import "./Btn.css";
const Btn = ({ text, callback }) => (
  <div className="button-wrapper">
    <button className="buttons" onClick={callback}>
      Load More
    </button>
  </div>
);

export default Btn;
