import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'shared/Api';
import CastList from 'components/Cast/CastList/CastList';

export default function Cast() {
  const [movieCast, setMovieCast] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  if (movieCast.length === 0) {
    return <p>We don't have any cast for this movie.</p>;
  }

  return <CastList movieCast={movieCast} />;
}