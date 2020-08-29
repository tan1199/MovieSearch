import React from "react";
import "./Grid.css";
const Grid = ({ header, child }) => (
  <div>
    <h1 className="grid-header">{header}</h1>
    <div className="grid-child">{child}</div>
  </div>
);
export default Grid;
