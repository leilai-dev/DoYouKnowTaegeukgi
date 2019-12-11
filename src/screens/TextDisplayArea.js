import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native'
// import { Text } from '@ui-kitten/components';
import TextDisplay from '../components/TextDisplay';
import Store from '../store';

let { height, width } = Dimensions.get('window');
const OFFSET = width / 2 - height / 2

export default class TextDisplayArea extends Component {
  constructor(props) {
    super(props);
  }

  end = () => {
    // console.log('end of play')
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <Store.Consumer>
          {
            store => {
              // console.log(store);
              return store.isTextDisplay ?
                (
                  <View style={{
                    ...styles.container,
                    alignItems: `${store.textPosition === 'expand' ? 'center' : store.textPosition}`,
                  }}>
                    <Store.Consumer>
                      {
                        store => {
                          return store.isTextLoop ? (
                            <Store.Consumer>
                              {
                                store => (
                                  <TextDisplay
                                    style={{
                                      ...styles.textDisplay,
                                      height: 1 * `${width / (store.textPosition === 'expand' ? 1 : 2)}`, // expand 설정시 무리, fontSize와 같은 문제
                                      backgroundColor: `rgba(0,0,0, ${store.backgroundAlpha})`, // opacity 변수 빼기
                                    }}
                                    onEnd={this.end}
                                    speed={store.loopSpeed}
                                    loop={-1}
                                    // reUpdate={} // 반복 재생 속도 변경시 1회 루프 끝나야 반영되는 문제있음.
                                    // isPlay={false}
                                    autoPlay={true}
                                  >
                                    <Text
                                      style={{
                                        fontSize: 1 * `${width / 2 * store.textSize}`, // 이게 먹히네
                                        // width: `${parseInt(height * 1 * 100)}%`,  // Text 컴포넌트의 텍스트 내용 줄 수(N) 만큼 height * N 하기.
                                        width: '100%',
                                      }}
                                      numberOfLines={1}

                                    >
                                      {store.textMessage}
                                    </Text>
                                  </TextDisplay>
                                )
                              }
                            </Store.Consumer>
                          ) : (
                              <View style={{
                                ...styles.textDisplay,
                                height: 1 * `${width / (store.textPosition === 'expand' ? 1 : 2)}`, // expand 설정시 무리, fontSize와 같은 문제
                                backgroundColor: `rgba(0,0,0, ${store.backgroundAlpha})`, // opacity 변수 빼기
                              }}>
                                <Text style={{
                                  ...styles.textMessage,
                                  fontSize: 1 * `${width / 2 * store.textSize}`, // 이게 먹히네
                                }}
                                  numberOfLines={1}
                                >{store.textMessage}</Text>
                              </View>
                            )
                        }
                      }
                    </Store.Consumer>

                  </View>
                )
                :
                // store.isTextDisplay === false
                (
                  <View style={styles.container}>
                  </View>
                )
            }
          }
        </Store.Consumer>
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