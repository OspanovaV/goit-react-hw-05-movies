import { ReiwersItem } from 'components/Reiwers/ReiwersList/ReiwersListStyled';

export default function ReiwersList({ movieReiwers }) {
  const results = movieReiwers.map(({ id, author, content }) => {
    return (
      <ReiwersItem key={id}>
        <h4>author: {author ? author : '...'}</h4>
        <p>{content ? content : '...'}</p>
      </ReiwersItem>
    );
  });

  return <ul>{results}</ul>;
}