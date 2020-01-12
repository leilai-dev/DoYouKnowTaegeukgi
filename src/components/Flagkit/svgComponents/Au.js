import React from 'react'
import Svg, { Defs, Path, ClipPath, Use, G } from "react-native-svg"

const SvgAu = props => {
    return (
      <Svg width={1280} height={640} viewBox="0 0 10080 5360" {...props}>
        <Defs>
          <Path
            id="prefix__a"
            d="M0-360l69.421 215.845 212.038-80.301L155.99-35.603l194.985 115.71-225.881 19.651 31.105 224.59L0 160l-156.198 164.349 31.105-224.59-225.881-19.651 194.986-115.711-125.471-188.853 212.038 80.301z"
          />
          <Path
            id="prefix__d"
            d="M0-210L54.86-75.508l144.862 10.614L88.765 28.842l34.67 141.052L0 93.334l-123.435 76.56 34.67-141.052-110.957-93.736L-54.86-75.508z"
          />
          <ClipPath id="prefix__b">
            <Path d="M0 0v1.5h7V3H6zm6 0H3v3.5H0V3z" />
          </ClipPath>
          <Use id="prefix__c" xlinkHref="#prefix__a" transform="scale(2.1)" />
        </Defs>
        <Path fill="#012169" d="M0 0h10080v5360H0z" />
        <Path d="M0 0l5040 2520m0-2520L0 2520" stroke="#fff" strokeWidth={504} />
        <Path
          d="M0 0l6 3m0-3L0 3"
          stroke="#e4002b"
          strokeWidth={0.4}
          clipPath="url(#prefix__b)"
          transform="scale(840)"
        />
        <Path d="M2520 0v2940M0 1260h5880" stroke="#fff" strokeWidth={840} />
        <Path d="M2520 0v2940M0 1260h5880" stroke="#e4002b" strokeWidth={504} />
        <Path d="M0 2520h5040V0h1680v3360H0z" fill="#012169" />
        <G fill="#fff">
          <Use xlinkHref="#prefix__c" x={2520} y={3780} />
          <Use xlinkHref="#prefix__a" x={7560} y={4200} />
          <Use xlinkHref="#prefix__a" x={6300} y={2205} />
          <Use xlinkHref="#prefix__a" x={7560} y={840} />
          <Use xlinkHref="#prefix__a" x={8680} y={1869} />
          <Use xlinkHref="#prefix__d" x={8064} y={2730} />
        </G>
      </Svg>
    )
  }
  
export default SvgAu
