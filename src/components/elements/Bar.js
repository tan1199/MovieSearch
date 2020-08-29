import React from "react";
import "./Bar.css";
const Bar = ({ image, title, movieId, text, rating, callback }) => (
  <div className="bars-wrapper">
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback("popular")}>
        Popular
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback("top_rated")}>
        Top Rated
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback("upcoming")}>
        Upcoming
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(28)}>
        Action
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(35)}>
        Comedy
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(80)}>
        Crime
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(99)}>
        Documentary
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(18)}>
        Drama
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(27)}>
        Horror
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(10749)}>
        Romance
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(53)}>
        Thriller
      </button>
    </div>
    <div className="genre-wrapper">
      <button className="genre-button" onClick={() => callback(10752)}>
        War
      </button>
    </div>
  </div>
);

export default Bar;
