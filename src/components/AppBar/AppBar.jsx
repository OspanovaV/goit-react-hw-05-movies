import { Header, Link } from 'components/AppBar/AppBarStyled';

export default function AppBar() {
  return (
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="movies">Movies</Link>
      </nav>
    </Header>
  );
}