import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'shared/Api';
import ReiwersList from 'components/Reiwers/ReiwersList/ReiwersList';

export default function Reiwers() {
  const [movieReiwers, setMovieReiwers] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReiwers);
  }, [movieId]);

  if (!movieReiwers) {
    return;
  }

  if (movieReiwers.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return <ReiwersList movieReiwers={movieReiwers} />;
}