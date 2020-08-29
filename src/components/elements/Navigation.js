import React from "react";
import MovieIcon from "./MovieIcon";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../urls";
// import noimage from "./images/no_image.jpg";
import "./Navigation.css";
const Navigation = ({ trailerkey, similar }) => {
  const trailer = `https://www.youtube.com/embed/${trailerkey}`;
  const similarMovies = similar.slice(0, 4);
  return (
    <div className="navigation-wrapper">
      <div className="navigation">
        <iframe
          title="unique"
          className="trailer"
          allowtransparency="true"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen={true}
          src={trailer}
        ></iframe>
        <div className="similarmovies-wrapper">
          <p className="similarmovies">Similar Movies</p>
          <div className="navigation-grid">
            {similarMovies.map((movie) => (
              <MovieIcon
                className="newm"
                key={movie.id}
                clickable
                image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
                movieId={movie.id}
                movieName={movie.original_title}
                genre={movie.genre_ids}
                rating={movie.vote_average}
                change={1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
