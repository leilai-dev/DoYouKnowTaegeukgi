import React from 'react'
import Svg, { Defs, Path, Use } from "react-native-svg"

const SvgCn = props => {
    return (
      <Svg width={900} height={600} viewBox="0 0 30 20" {...props}>
        <Defs>
          <Path
            id="prefix__a"
            d="M0-1L.588.809-.952-.309H.952L-.588.809z"
            fill="#ffde00"
          />
        </Defs>
        <Path fill="#de2910" d="M0 0h30v20H0z" />
        <Use xlinkHref="#prefix__a" transform="matrix(3 0 0 3 5 5)" />
        <Use xlinkHref="#prefix__a" transform="rotate(23.036 .093 25.536)" />
        <Use xlinkHref="#prefix__a" transform="rotate(45.87 1.273 16.18)" />
        <Use xlinkHref="#prefix__a" transform="rotate(69.945 .996 12.078)" />
        <Use xlinkHref="#prefix__a" transform="rotate(20.66 -19.689 31.932)" />
      </Svg>
    )
  }
  
export default SvgCn
