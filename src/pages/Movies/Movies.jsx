import { MovieList } from 'shared/components/MovieList/MovieList';
import SearchBox from 'shared/components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'shared/Api';
import Notify from 'shared/components/Notify';
import Loader from 'shared/components/Loader/Loader';

//Отслеживание изменений строки запроса
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  
  const query = searchParams.get('query');

  const searchSubmit = query => {
     setSearchParams({ query: query });
    setMovies([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getSearchMovie(query);
        setMovies(result.results);
      } catch (e) {
        setError(e.toJSON());
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Notify msg={error} />}
      <SearchBox onSubmit={searchSubmit} />
      <MovieList movies={movies} />
    </div>
  );
}