import React from "react";
import Actor from "./elements/Actor";
import MovieInfo from "./elements/MovieInfo";
import Navigation from "./elements/Navigation";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";
import noimage from "./images/default_image.jpg";
import { useMovieFetch } from "./hooks/useMovieFetch";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../urls";
import "./Movie.css";
function Movie({ movieId }) {
  const [movie, loading, error] = useMovieFetch(movieId);
  if (movie.original_title === undefined || loading || error)
    return <Spinner />;
  return (
    <div>
      <MovieInfo
        image={
          movie.backdrop_path
            ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
            : noimage
        }
        imgs={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
        title={movie.original_title}
        text={movie.directors}
        rating={movie.vote_average}
        genre={movie.genres}
        plot={movie.overview}
        popularity={movie.popularity}
        runtime={movie.runtime}
        release={movie.release_date}
      />
      <Navigation trailerkey={movie.video} similar={movie.similar} />
      <Grid
        header="Cast"
        child={movie.actors.map((elem) => (
          <Actor key={elem.credit_id} actor={elem} />
        ))}
      />
      {loading && <Spinner />}
    </div>
  );
}

export default Movie;
