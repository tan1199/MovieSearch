import React from "react";
import "./MovieInfo.css";
const movieinfostyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const MovieInfo = ({
  image,
  title,
  text,
  rating,
  genre,
  plot,
  popularity,
  runtime,
  imgs,
  release,
}) => {
  const n = genre.length;

  return (
    <div className="movieinfo-wrapper">
      <img
        src={image}
        alt="reactlogo"
        className="movieinfo-backgroundimage"
        style={movieinfostyle}
      />
      <div className="smallicon">
        <img
          src={imgs}
          alt="reactlogo"
          className="movieinfo-image"
          style={movieinfostyle}
        />
      </div>
      <div className="imp">
        <div className="img-content">
          <p className="movieinfo-title">{title}</p>

          <div className="movieinfo-genre">
            {genre.map((elem, index) =>
              index === n - 1 ? (
                <b key={elem.id}>{elem.name}</b>
              ) : (
                <b key={elem.id}>{elem.name} / </b>
              )
            )}
            <p className="plot-wrapper">Plot</p>
            <p className="plot">{plot}</p>
            <div className="info-wrapper">
              <div>
                <p className="director">Director</p>
                {text.map((elem) => (
                  <p className="director" key={elem.credit_id}>
                    {elem.name}
                  </p>
                ))}
              </div>

              <div>
                <p className="movieinfo-time">Release Date - {release}</p>
                <p className="movieinfo-time">Runtime : {runtime} min</p>
              </div>
              <div>
                <p className="rating-wrapper">Imdb Rating</p>
                <p className="rating">{rating} &#9733;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
