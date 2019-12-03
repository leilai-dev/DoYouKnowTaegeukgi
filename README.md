# React Native
react-native: 0.61.5

[react-native-svg - npm] (https://www.npmjs.com/package/react-native-svg#common-props)

[jackmew/react-native-svg-flagkit: SVG flag for react-native] (https://github.com/jackmew/react-native-svg-flagkit)
> 다른 국가의 국기 선택시 활용할 라이브러리
[Playground - SVGR] (https://www.smooth-code.com/open-source/svgr/playground/)
> svg to react(native) code

## Orientation - Portrait 일 때, Landscape처럼 보여주기
### [How to layout rotated text in React Native - Maarten Schumacher - Medium] (https://medium.com/@therealmaarten/how-to-layout-rotated-text-in-react-native-6d55b7d71ca5)
컴포넌트를 회전시키자.

문제점
- 회전하기 전의 좌표를 기준으로 컴포넌트의 레이아웃이 잡혀있다
  > 회전 전/후의 Offset 계산하여 적절히 더하고 빼기

정사각형의 레이아웃일 경우 flexbox 정렬 속성을 적절히 활용하면 해결 될 수도?

# 라이브러리 수정 내역
## react-native-svg-flagkit
전반적으로 대부분의 국기 퀄리티가 구리다. 라이브러리 제거하고 별도의 svg 컴포넌트 구성할 필요성 있음

### node_modules\react-native-svg-flagkit\index.js
```
  {
      code: 'KR',
      region: 'South Korea',
      // component: null,
      **component: Kr,**
      img: require('./PNG/KR.png'),
  },
```
null 대신 Kr.js svg컴포넌트 사용하도록 수정

### node_modules\react-native-svg-flagkit\Flag.js
```
...
import { View, Text, Image, TouchableOpacity, **ViewPropTypes** } from 'react-native';
  ...
  **style: ViewPropTypes.style,**
  ...
  return <SvgComponent width={width * size} height={height * size} **{...this.props}** />

```
컴포넌트 스타일 적용을 위한 props 추가

#### [react native - How to declare style in propTypes? - Stack Overflow] (https://stackoverflow.com/questions/34626298/how-to-declare-style-in-proptypes)


### node_modules\react-native-svg-flagkit\svgComponents\Kr.js
react-native-svg로 구성된 svg 코드 수정


# References
### [올리버쌤] 태극기 뜻 영어로 설명하는 방법 - YouTube] (https://www.youtube.com/watch?v=rNVXKEx1XfU)
