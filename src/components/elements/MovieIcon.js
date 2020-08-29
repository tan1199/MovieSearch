import React from "react";
import { Link } from "@reach/router";
import "./MovieIcon.css";
const movieiconstyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const MovieIcon = ({ image, movieId, clickable, genre, rating, change }) => {
  const genres = genre.length > 2 ? genre.splice(0, 2) : genre;
  const items = genres.map(function (item) {
    const oo =
      item === 28
        ? "Action"
        : item === 12
        ? "Adventure"
        : item === 16
        ? "Animation"
        : item === 35
        ? "Comedy"
        : item === 80
        ? "Crime"
        : item === 99
        ? "Documentary"
        : item === 18
        ? "Drama"
        : item === 10751
        ? "Family"
        : item === 14
        ? "Fantasy"
        : item === 36
        ? "History"
        : item === 27
        ? "Horror"
        : item === 10402
        ? "Music"
        : item === 9648
        ? "Mystery"
        : item === 10749
        ? "Romance"
        : item === 878
        ? "Science Fiction"
        : item === 53
        ? "Thriller"
        : item === 10770
        ? "TV Movie"
        : item === 10752
        ? "War"
        : "Western";

    return <p key={item}>{oo} </p>;
  });
  return (
    <div className={change === 0 ? "icons" : "newicons"}>
      <Link to={`/${movieId}`}>
        <div>
          <img
            src={image}
            alt="icons"
            className="movieicon-image"
            style={movieiconstyle}
          />
          <div className="movieicon-content">
            {items}
            <p>{rating} &#9733;</p>
          </div>
          <div className="movieicon-rating">{rating} &#9733;</div>
        </div>
      </Link>
    </div>
  );
};
export default MovieIcon;
