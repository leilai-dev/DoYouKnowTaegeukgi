import React from 'react'
import Svg, { ClipPath, Path, G } from "react-native-svg"

const SvgGb = props => {
    return (
      <Svg viewBox="0 0 60 30" width={1200} height={600} {...props}>
        <ClipPath id="prefix__a">
          <Path d="M0 0v30h60V0z" />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
        </ClipPath>
        <G clipPath="url(#prefix__a)">
          <Path d="M0 0v30h60V0z" fill="#012169" />
          <Path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth={6} />
          <Path
            d="M0 0l60 30m0-30L0 30"
            clipPath="url(#prefix__b)"
            stroke="#C8102E"
            strokeWidth={4}
          />
          <Path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth={10} />
          <Path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth={6} />
        </G>
      </Svg>
    )
  }

export default SvgGb
