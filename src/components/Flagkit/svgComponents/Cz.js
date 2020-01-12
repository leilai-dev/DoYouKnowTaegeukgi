import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgCz = props => {
    return (
      <Svg width={900} height={600} viewBox="0 0 900 600" {...props}>
        <Path fill="#d7141a" d="M0 0h900v600H0z" />
        <Path fill="#fff" d="M0 0h900v300H0z" />
        <Path d="M450 300L0 0v600z" fill="#11457e" />
      </Svg>
    )
  }
  
export default SvgCz
