import React from "react";
import { Link } from "@reach/router";
import "./HomeMovie.css";
const styl = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const HomeMovie = ({ image, title, movieId, text, rating, callback }) => (
  <div className="homemovie-wrapper">
    <div className="contain">
      <Link to={`/${movieId}`}>
        <img
          src={image}
          alt="reactlogo"
          style={styl}
          className="homemovie-image"
        />
      </Link>
    </div>
    <div className="description">
      <p className="homemovie-heading">{title} </p>
      <p className="homemovie-text">{text}</p>
      <p className="homemovie-rating">Imdb Rating : {rating} &#9733;</p>
    </div>
  </div>
);
export default HomeMovie;
