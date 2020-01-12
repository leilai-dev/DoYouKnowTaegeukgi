import React from 'react'
import Svg, { Path, G, Use } from "react-native-svg"

const SvgIr = props => {
    return (
      <Svg width={630} height={360} viewBox="0 0 630 360" {...props}>
        <Path fill="#da0000" d="M0 0h630v360H0z" />
        <Path fill="#fff" d="M0 0h630v240H0z" />
        <Path fill="#239f40" d="M0 0h630v120H0z" />
        <G transform="translate(8.4 100.4)">
          <G id="prefix__e">
            <G id="prefix__c" fill="none" stroke="#fff" strokeWidth={2}>
              <Path
                id="prefix__b"
                d="M0 1h26M1 10V5h8v4h8V5h-5M4 9h2m20 0h-5V5h8m0-5v9h8V0m-4 0v9"
                transform="scale(1.4)"
              />
              <Path id="prefix__a" d="M0 7h9m1 0h9" transform="scale(2.8)" />
              <Use xlinkHref="#prefix__a" y={120} />
              <Use xlinkHref="#prefix__b" y={145.2} />
            </G>
            <G id="prefix__d">
              <Use xlinkHref="#prefix__c" x={56} />
              <Use xlinkHref="#prefix__c" x={112} />
              <Use xlinkHref="#prefix__c" x={168} />
            </G>
          </G>
          <Use xlinkHref="#prefix__d" x={168} />
          <Use xlinkHref="#prefix__e" x={392} />
        </G>
        <G fill="#da0000" transform="matrix(45 0 0 45 315 180)">
          <G id="prefix__f">
            <Path d="M-.548.836A.912.912 0 00.329-.722 1 1 0 01-.548.836" />
            <Path d="M.618.661A.764.764 0 00.422-.74 1 1 0 01.618.661M0 1l-.05-1L0-.787a.31.31 0 00.118.099V-.1l-.04.993zM-.02-.85L0-.831a.144.144 0 00.252-.137A.136.136 0 010-.925" />
          </G>
          <Use xlinkHref="#prefix__f" transform="scale(-1 1)" />
        </G>
      </Svg>
    )
  }
  
export default SvgIr
