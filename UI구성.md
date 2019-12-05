# 추가한 라이브러리
## Eva Design / UI Kitten
```
"@eva-design/eva": "^1.3.0",
"@eva-design/processor": "^1.3.0",
"@ui-kitten/components": "^4.3.1",
"@ui-kitten/eva-icons": "^4.3.0",
```
4.3 업데이트된지 얼마 안되서 npm 설치시 오류 발생, 공식 문서 가이드 수정 필요해보임

## Navigation (react-navigation)
```
"react-navigation": "^4.0.10",
"react-navigation-stack": "^1.10.3",
"react-native-screens": "^2.0.0-alpha.16",
"react-native-gesture-handler": "^1.5.2",
"react-native-reanimated": "^1.4.0",
```
네비게이션까지 필요 없을 것 같지만 추후 기능 확장을 고려해서 미리 추가

### [Getting started · React Navigation] (https://reactnavigation.org/docs/en/getting-started.html)
### [UI Kitten - Configure Navigation] (https://akveo.github.io/react-native-ui-kitten/docs/guides/configure-navigation#configure-navigation)
UI Kitten 예제 테스트를 위해 react-navigation-stack 을 추가설치

## for Bottom sheet
```
"react-native-raw-bottom-sheet": "^2.0.6",
```
실제로는 Modal을 확장한 라이브러리지만 원하는 기능은 다 구현되어 있어서 약간의 수정 후 활용하기로 결정

### 추후 활용 고려
```
"react-native-modal": "^11.5.3",
```
react-native의 Modal 컴포넌트를 확장한 라이브러리, 미리 구성된 옵션이 많아서 좋아보임.

### 테스트 후 미적용
```
"rn-bottom-sheet": "^1.1.0"
```
구림
```
"reanimated-bottom-sheet": "^1.0.0-alpha.18",
```
괜찮아 보이나 터치 이벤트 잘 안되서 포기


# 수정 내역
## react-native-raw-bottom-sheet(RBSheet) 컴포넌트 추가 수정
배너 광고 노출을 위한 backdrop 영역의 컴포넌트 추가

### node_modules\react-native-raw-bottom-sheet\src\index.js
```
{
  <>
    {/* Ad area */}
    <TouchableOpacity style={{ flex: 1, backgroundColor: 'transperent' }}>
      <View>
        <Text>test ad area</Text>
      </View>
    </TouchableOpacity>
    {/* Hold button */}
    <View style={{ flex: 1, backgroundColor: 'transperent', justifyContent: 'flex-start', alignItems: 'center' }}>
      <TouchableOpacity>
        <Text>Hold button area</Text>
      </TouchableOpacity>
    </View>
    {/* Empty area */}
    <TouchableOpacity style={{ flex: 1, backgroundColor: 'transperent' }} onPress={() => this.close()}>

      <View>
      </View>
    </TouchableOpacity>
  </>
}
```
콘텐츠 영역의 flex 값을 3으로 지정해서 항상 디바이스 절반 영역에 표시되도록 수정

