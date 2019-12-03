import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';
import { Flag } from 'react-native-svg-flagkit';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  var { height, width } = Dimensions.get('window');

  return (
    <>
      <StatusBar hidden />
      <ImageBackground
        source={{
          uri:
            'https://wikis.krsocsci.org/images/7/79/%EB%8C%80%ED%95%9C%EC%99%95%EA%B5%AD_%ED%83%9C%EA%B7%B9%EA%B8%B0.jpg'
        }}
        style={{
          width: height,
          height: width,
          // transform: [{rotateZ: '-90deg'}],
          resizeMode: 'cover',
          borderColor: 'black',
          borderWidth: 1,
          backgroundColor: Colors.dark
        }}>
        <SafeAreaView style={{ backgroundColor: Colors.dark }}>
          <View
            style={{
              transform: [{ rotate: '-90deg' }],
              justifyContent: 'flex-start',
              left: -135.5,
              top: 120
              // alignItems: 'flex-end',
              // display: 'flex',
              // justifyContent: 'center',
              // // alignContent: 'center',
              // flexDirection: 'column',
            }}>
            <Flag id={'TW'} width={height} height={width} />
            {/* <Image
            style={{
              width: height,
              height: width,
              rotation: '90deg',
              alignContent: 'center',
              resizeMode: 'contain',
              borderColor: 'black',
              borderWidth: 1,
            }}
            source={{
              uri:
                'https://wikis.krsocsci.org/images/7/79/%EB%8C%80%ED%95%9C%EC%99%95%EA%B5%AD_%ED%83%9C%EA%B7%B9%EA%B8%B0.jpg',
            }}
          /> */}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default App;
