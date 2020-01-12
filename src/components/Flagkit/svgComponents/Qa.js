import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgQa = props => {
    return (
      <Svg
        width={1400}
        height={550}
        viewBox="0 0 75 18"
        preserveAspectRatio="none"
        {...props}
      >
        <Path fill="#8d1b3d" d="M0 0h75v18H0z" />
        <Path
          d="M22 18H0V0h22l6 1-6 1 6 1-6 1 6 1-6 1 6 1-6 1 6 1-6 1 6 1-6 1 6 1-6 1 6 1-6 1 6 1z"
          fill="#fff"
        />
      </Svg>
    )
  }
  
export default SvgQa
