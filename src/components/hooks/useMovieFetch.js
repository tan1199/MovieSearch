import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../urls";
export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      const videosEndpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`;
      const videosResult = await (await fetch(videosEndpoint)).json();
      const similarEndpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`;
      const similarResult = await (await fetch(similarEndpoint)).json();
      const director = creditsResult.crew.filter(
        (member) => member.job === "Director"
      );
      const trailer = videosResult.results.filter(
        (member) => member.type === "Trailer"
      );
      const directors = director.splice(0, 1);
      setState({
        ...result,
        actors: creditsResult.cast.splice(0, 10),
        video: trailer[0].key,
        similar: similarResult.results,
        directors,
      });
    } catch {
      setError(true);
    }
    setLoading(false);
  }, [movieId]);
  useEffect(() => {
    if (localStorage[movieId]) {
      setState(JSON.parse(localStorage[movieId]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, movieId]);

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return [state, loading, error];
};
