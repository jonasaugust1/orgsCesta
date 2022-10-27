import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Coracao(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      color="#2A9F85"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.84 4.61a5.501 5.501 0 00-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
