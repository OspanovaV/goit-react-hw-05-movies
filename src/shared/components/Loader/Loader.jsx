import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapp } from './LoaderStyled';

export default function Loader() {
  return (
    <LoaderWrapp>
      <RotatingLines
        strokeColor="#0a4270"
        strokeWidth="5"
        animationDuration="0.75"
        width="112"
        visible={true}
      />
    </LoaderWrapp>
  );
}