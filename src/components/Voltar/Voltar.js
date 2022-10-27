import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Voltar(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      color="#000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 4.293a1 1 0 010 1.414L6.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </Svg>
  );
}
