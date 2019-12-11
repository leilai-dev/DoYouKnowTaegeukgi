import React, { Component } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './screens/Navigation';
import KeepAwake from 'react-native-keep-awake';

import Store from './store';

// import { firebase } from '@react-native-firebase/analytics'

/* 
  TODO:
  - firebase analytics 이벤트 정의

  - 국가별 정보 보기?
  - RBSheet 메뉴 구성
      - 폰트효과 전체적으로 bold 적용 가능, 그 외 아웃라인 등 시스템 폰트 사용하는 방향으로
      - 효과 / 아웃라인 / 포지션 *
    - 데이터 저장 스토어 / Context 구현

  위 기능들 완료 후 git flow 버전 관리 진행하기

*/

// firebase.initializeApp()
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Provider / Consumer로 사용할 state value정의하기
      // 메서드 및 텍스트 옵션 값 / firebase등?
      isTextDisplay: true,
      textDisplayToggle: this._textDisplayToggle,
      isTextLoop: false,
      textLoopDisabled: true,
      textLoopToggle: this._textLoopToggle,
      textMessage: '화면을 터치하여 글 수정',
      onChangeTextMessage: this._onChangeTextMessage,
      loopSpeed: 10, // 2, 5, 10, 20, 40 5단계
      changeLoopSpeed: this._changeLoopSpeed,
      textSize: 0.2, // 0.2, 0.4, 0.6, 0.8, 1 (5)
      changeTextSize: this._changeTextSize,
      textPosition: 'center', // 'center', 'flex-end', 'flex-start', 'expand' 
      changeTextPosition: this._changeTextPosition,
      backgroundColor: 'black', // 몇 종류 할지...
      changeBackgroundColor: this._changeBackgroundColor,
      backgroundAlpha: 0.3, // 0~1
      changeBackgroundAlpha: this._changeBackgroundAlpha,

      countryCode: 'KR',
      changeCountryCode: this._changeCountryCode,

      // i18n 고려시

      // 구매 적용시, iap 상태 값 저장 어디에?
      // 구매 복원의 경우?

    }
  }

  _textDisplayToggle = () => {
    this.setState(prevState => ({
      ...this.state,
      isTextDisplay: !prevState.isTextDisplay,
    })
    )
  }

  _textLoopToggle = () => {
    this.setState(prevState => ({
      ...this.state,
      isTextLoop: !prevState.isTextLoop,
    })
    )
  }

  _textLoopToggle = () => {
    this.setState(prevState => ({
      ...this.state,
      isTextLoop: !prevState.isTextLoop,
    })
    )
  }

  // 최대 길이 검증 필요할수도
  _onChangeTextMessage = (e) => {
    // console.log(e);
    this.setState({
      textMessage: e
    })
  }

  _changeLoopSpeed = (speed) => {
    this.setState({
      loopSpeed: speed
    })
  }

  _changeTextSize = (size) => {
    console.log(size);
    this.setState({
      // ...this.state,
      textSize: size
    })
  }

  _changeTextPosition = (position) => {
    this.setState({
      textPosition: position
    })
  }

  _changeBackgroundColor = (color) => {
    this.setState({
      backgroundColor: color
    })
  }

  _changeBackgroundAlpha = (alpha) => {
    this.setState({
      backgroundAlpha: alpha
    })
  }

  render() {
    return (
      <React.Fragment>
        <Store.Provider value={this.state}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={theme}>
            <AppNavigator />
            <KeepAwake />
          </ApplicationProvider>
        </Store.Provider>
      </React.Fragment>
    );
  }
}
