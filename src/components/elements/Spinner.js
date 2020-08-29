import React from "react";
import spinner from "../images/spinner.gif";
import "./Spinner.css";
const Spinner = () => (
  <div className="spinner-wrapper">
    <img src={spinner} alt="reactlogo" />
  </div>
);

export default Spinner;
