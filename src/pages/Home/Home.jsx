import { getTrendingMovies } from 'shared/Api';
import { useState, useEffect } from 'react';
import { MovieList } from 'shared/components/MovieList/MovieList';
import Loader from 'shared/components/Loader/Loader';
import Notify from 'shared/components/Notify';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getTrendingMovies();
        setMovies(result.results);
      } catch (e) {
        setError(e.toJSON());
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <main>
      {loading && <Loader />}
      {error && <Notify msg={error} />}
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
}