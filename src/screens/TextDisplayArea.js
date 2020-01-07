import React, { Component, useContext } from 'react'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native'
// import { Text } from '@ui-kitten/components';
import TextDisplay from '../components/TextDisplay';
import { TextConsumer } from '../contexts/TextContext';

let { height, width } = Dimensions.get('window');
const OFFSET = width / 2 - height / 2

// 아마 TextDisplay가 클래스형이라 useContext 사용 불가능

export default class TextDisplayArea extends Component {
  constructor(props) {
    super(props);
  }

  end = () => {
    console.log('end of play')
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <TextConsumer>
          {
            store => {
              return store.isTextDisplay
                ? store.isTextLoop
                  ? (
                    <View style={{
                      ...styles.container,
                      alignItems: `${store.textPosition === 'expand' ? 'center' : store.textPosition}`,
                    }}>

                      <TextDisplay
                        style={{
                          ...styles.textDisplay,
                          height: 1 * `${width / (store.textPosition === 'expand' ? 1 : 2)}`, // expand 설정시 무리, fontSize와 같은 문제
                          backgroundColor: `rgba(0,0,0, ${store.backgroundAlpha})`, // opacity 변수 빼기
                        }}
                        onEnd={this.end}
                        // speed={store.loopSpeed}
                        speed={store.loopSpeed}
                        loop={-1}
                        // 반복 재생 속도 변경시 1회 루프 끝나야 반영되는 문제있음.
                        isPlay={false}
                        autoPlay={true}
                      >
                        <Text
                          style={{
                            fontSize: 1 * `${width / 2 * store.fontSize}`, // 이게 먹히네
                            color: store.fontColor,
                            // width: `${parseInt(height * 1 * 100)}%`,  // Text 컴포넌트의 텍스트 내용 줄 수(N) 만큼 height * N 하기.
                            width: '100%',
                          }}
                          numberOfLines={1}

                        >
                          {store.text}
                        </Text>
                      </TextDisplay>

                    </View>
                  )
                  : (
                    <View style={{
                      ...styles.container,
                      alignItems: `${store.textPosition === 'expand' ? 'center' : store.textPosition}`,
                    }}>
                      <View style={{
                        ...styles.textDisplay,
                        height: 1 * `${width / (store.textPosition === 'expand' ? 1 : 2)}`, // expand 설정시 무리, fontSize와 같은 문제
                        backgroundColor: `rgba(0,0,0, ${store.backgroundAlpha})`, // opacity 변수 빼기
                      }}>
                        <Text style={{
                          ...styles.textMessage,
                          color: store.fontColor,
                          fontSize: 1 * `${width / 2 * store.fontSize}`, // 이게 먹히네
                        }}
                          numberOfLines={1}
                        >{store.text}</Text>
                      </View>
                    </View>
                  )
                : (
                  <View style={styles.container}>
                  </View>
                )
            }
          }
        </TextConsumer>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  textDisplay: {
    justifyContent: 'center',
    width: height,
    alignItems: 'center',
    transform: [
      { rotateZ: '-90deg' },
    ],
  },
  textMessage: {
    width: '100%',
    textAlign: 'center',
  }
});