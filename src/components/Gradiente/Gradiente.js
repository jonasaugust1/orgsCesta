import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

export default function Gradiente(props) {
  return (
    <Svg
      width={360}
      height={128}
      viewBox="0 0 360 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 0h360v116c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V0z"
        fill="url(#paint0_linear_1400:3271)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1400:3271"
          x1={180}
          y1={0}
          x2={180}
          y2={128}
          gradientUnits="userSpaceOnUse">
          <Stop stopOpacity={0.6} />
          <Stop offset={1} stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
