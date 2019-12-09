import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, StatusBar } from 'react-native'
import TextDisplay from '../components/TextDisplay';

let { height, width } = Dimensions.get('window');
const OFFSET = width / 2 - height / 2

export default class Main extends Component {
  state = {
    numberOfLines: 1,
  }
  end = () => {
    console.log('end of play')
  }

  render() {
    return (
      <>
        <StatusBar hidden />

        <View style={styles.container}>
          {/* <Text style={styles.welcome}>react native TextDisplay marque</Text> */}
          {/* <Text style={styles.instructions}>marquee module for react native</Text> */}
          <TextDisplay
            style={{
              height: width / 2,
              width: height,
              backgroundColor: '#eee',
              borderWidth: 1,
              justifyContent: 'center',
              // alignItems: 'flex-start',

              transform: [
                { rotateZ: '-90deg' },
                // { translateX: -OFFSET },
                // { translateY: -OFFSET }
              ],
            }}
            // onEnd={this.end}
            // isPlay={false}
            // autoPlay={false}
            speed={5}
            loop={-1}
          // contentWidth={height}
          >
            <Text
              // fontSize={100}
              style={{
                fontSize: width / 2,
                lineHeight: width / 2,
                // width: `${parseInt(height * 1 * 100)}%`,  // Text 컴포넌트의 텍스트 내용 줄 수(N) 만큼 height * N 하기.
                // width: height,
                width: '100%',
                // overflow: 'visible',
                // width: height,
                // height: width,
                // whiteSpace: 'nowrap',
                // textOverflow: 'visible',
                backgroundColor: 'white',
              }}
              onLayout={(e) => {
                let flag = 0;
                // flag === 0 ?
                //   this.setState({ numberOfLines: parseInt(e.nativeEvent.layout.height / 72) })
                //   : flag = 1;
                // flag = 1;
                console.log(e.nativeEvent.layout.width)
              }}
              numberOfLines={1}

            >lookhere! looklookhere!</Text>
            {/* <View style={{ height: 50, width: 50, backgroundColor: '#333', marginLeft: 10 }}></View> */}
          </TextDisplay>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  // container: {
  //   // flex: 1,
  //   height: '100%',
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   backgroundColor: 'yellow'
  // },
  // scrolling2: {
  //   borderWidth: 1,
  //   width: height,
  //   transform: [
  //     { rotateZ: '-90deg' },
  //     { translateX: OFFSET * 2 },
  //     { translateY: OFFSET }
  //   ],
  //   // overflow: 'hidden',
  //   backgroundColor: 'green',
  //   // alignItems: 'center',
  //   // justifyContent: 'center'
  // },
  // welcome: {
  //   color: "red",
  //   fontSize: 48,
  //   fontWeight: "bold",
  //   margin: 16,
  //   // textAlign: "center",

  // },
  // bgViewStyle: {
  //   flexDirection: 'row',
  //   alignItems: 'flex-start',
  //   justifyContent: 'flex-start',
  //   overflow: 'scroll',
  //   paddingLeft: 20,
  //   paddingRight: 20,
  // },
  // textStyle: {
  //   width: '100%',
  // },
  // textSizeMeasuringViewStyle: {
  //   opacity: 0,
  //   fontSize: 20,
  // },
});