import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Container } from 'components/AppStyled';
import  SharedLayout  from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reiwers/Reiwers'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reiwers" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
