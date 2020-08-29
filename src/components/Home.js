import React, { useState, useEffect } from "react";
import Grid from "./elements/Grid";
import Btn from "./elements/Btn";
import Spinner from "./elements/Spinner";
import Bar from "./elements/Bar";
import SearchBar from "./elements/SearchBar";
import MovieIcon from "./elements/MovieIcon";
import HomeMovie from "./elements/HomeMovie";
import { useHomeFetch } from "./hooks/useHomeFetch";
import { BACKDROP_SIZE } from "../urls";
import noimage from "./images/default_image.jpg";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
} from "../urls";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [{ state, loading, error }, fetchMovies] = useHomeFetch(searchTerm);
  const [aTerm, setaTerm] = useState("popular");
  const [bTerm, setbTerm] = useState("");
  const [cTerm, setcTerm] = useState("");
  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    setSearchTerm(search);
    fetchMovies(endpoint);
    if (!search) {
      sessionStorage.setItem("hometate", "Popular");
    }
    setSeconds(0);
  };
  const loadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/popular?api_key=${API_KEY}&query=${searchTerm}&page=${
      state.currentPage + 1
    }`;
    const popularEndpoint = `${API_URL}${cTerm}movie/${aTerm}?api_key=${API_KEY}${bTerm}&page=${
      state.currentPage + 1
    }`;
    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };
  const trend = (input_genre) => {
    const ans =
      input_genre === 28
        ? "Action"
        : input_genre === "top_rated"
        ? "Top Rated"
        : input_genre === "upcoming"
        ? "Upcoming"
        : input_genre === 16
        ? "Animation"
        : input_genre === 80
        ? "Crime"
        : input_genre === 99
        ? "Documentary"
        : input_genre === 18
        ? "Drama"
        : input_genre === 10751
        ? "Family"
        : input_genre === 14
        ? "Fantasy"
        : input_genre === 35
        ? "Comedy"
        : input_genre === 36
        ? "History"
        : input_genre === 27
        ? "Horror"
        : input_genre === 10402
        ? "Music"
        : input_genre === 9648
        ? "Mystery"
        : input_genre === 10749
        ? "Romance"
        : input_genre === 878
        ? "Science Fiction"
        : input_genre === 53
        ? "Thriller"
        : input_genre === 10770
        ? "TV Movie"
        : input_genre === 10752
        ? "War"
        : "Popular";
    sessionStorage.setItem("hometate", `${ans}`);
    if (typeof input_genre === "string") {
      setaTerm(input_genre);
      setbTerm("");
      setcTerm("");
      const genre_endpoint = `https://api.themoviedb.org/3/movie/${input_genre}?api_key=a7061c0e89f9df9b353bb6ba982609ac&language=en-US`;
      fetchMovies(genre_endpoint);
    } else {
      setaTerm("");
      setcTerm("discover/");
      setbTerm(`&vote_average.gte=7&with_genres=${input_genre}`);
      const genre_endpoint = `https://api.themoviedb.org/3/discover/movie/?api_key=a7061c0e89f9df9b353bb6ba982609ac&language=en-US&vote_average.gte=7&with_genres=${input_genre}`;
      fetchMovies(genre_endpoint);
    }
  };

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (seconds > 4) {
      setSeconds(0);
    }
    interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [seconds]);

  if (error) return <div>Something went wrong ...</div>;

  if (!searchTerm && !state.movies[0]) return <div></div>;
  return (
    <>
      {!searchTerm && (
        <HomeMovie
          image={
            state.movies[seconds].backdrop_path
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.movies[seconds].backdrop_path}`
              : noimage
          }
          title={state.movies[seconds].original_title}
          movieId={state.movies[seconds].id}
          text={state.movies[seconds].overview}
          rating={state.movies[seconds].vote_average}
          callback={trend}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Bar callback={trend} />
      <Grid
        header={
          searchTerm
            ? "Search Result"
            : sessionStorage.getItem("hometate") === null
            ? "Popular Movies"
            : `${sessionStorage.getItem("hometate")} Movies`
        }
        child={state.movies.map((movie) => (
          <MovieIcon
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noimage
            }
            movieId={movie.id}
            movieName={movie.original_title}
            genre={movie.genre_ids}
            rating={movie.vote_average}
            change={0}
          />
        ))}
      />
      {loading && <Spinner />}
      {state.currentPage < state.totalPages && !searchTerm && !loading && (
        <Btn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};
export default Home;
