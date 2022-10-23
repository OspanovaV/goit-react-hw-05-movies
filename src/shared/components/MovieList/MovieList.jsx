import { Link, useLocation } from 'react-router-dom';
import imgPlaceholder from 'images/img-placeholder.png';
import { MovieWrapp, MovieItem } from './MovieListStyled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const elements = movies.map(({ id, title, poster_path }) => (
    <MovieItem key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : imgPlaceholder
          }
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </MovieItem>
  ));

  return <MovieWrapp>{elements}</MovieWrapp>;
};