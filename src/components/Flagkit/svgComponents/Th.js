import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgTh = props => {
    return (
      <Svg width={900} height={600} viewBox="0 0 900 600" {...props}>
        <Path fill="#A51931" d="M0 0h900v600H0z" />
        <Path fill="#F4F5F8" d="M0 100h900v400H0z" />
        <Path fill="#2D2A4A" d="M0 200h900v200H0z" />
      </Svg>
    )
  }
export default SvgTh
