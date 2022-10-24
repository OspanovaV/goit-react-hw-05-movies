import {
  Container,
  Description,
  Poster,
  Wrapper,
  NavTab,
  Link,
  WrapperDesc,
} from 'components/MovieCard/MovieCardStyled';
import { Outlet, useLocation } from 'react-router-dom';
import imgPlaceholder from 'images/img-placeholder.png';

export default function MovieCard({ movie }) {
  const location = useLocation();
  const from = location.state?.from ?? '/movies';

  const {
    poster_path,
    title,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = movie;

  const backdrop = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;
  return (
    <>
      <Container backdrop_path={backdrop}>
        <Wrapper>
          <Poster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : imgPlaceholder
            }
          />
          <Description>
            <h1>{title}</h1>
            <p>
              <b>{release_date}</b>
            </p>
            <p>
              User score :{' '}
              <b>
                {vote_average ? Math.round((vote_average * 100) / 10) : '...'}%
              </b>
            </p>
            <h2>Overview</h2>
            <p>{overview ? overview : '...'}</p>
            <h2>Genres</h2>
            <p>{genres ? genres.map(item => item.name).join(', ') : '...'}</p>
          </Description>
        </Wrapper>
      </Container>
      <WrapperDesc>
        <h2>Additional information</h2>
        <NavTab>
          <Link state={{ from }} to="cast">
            Cast
          </Link>
          <Link state={{ from }} to="reiwers">
            Reiwers
          </Link>
        </NavTab>
        <Outlet />
      </WrapperDesc>
    </>
  );
}