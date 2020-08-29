import React from "react";
import noimage from "../images/default_image.jpg";
import "./Actor.css";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../urls";
const st = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5em",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
function Actor({ actor }) {
  return (
    <div className="actor-wrapper">
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : noimage
        }
        className="actor-image"
        style={st}
        alt="Actorthumb"
      />
      <div className="names">
        <span className="actor-name">{actor.name}</span>
        <span className="actor-character">{actor.character}</span>
      </div>
    </div>
  );
}

export default Actor;
