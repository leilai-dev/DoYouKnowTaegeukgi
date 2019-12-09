// Detail 페이지 이동 후 뒤로가기 호출시 강제 종료 테스트를 위한 홈
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
  View,
  StatusBar,
  Text,
  Dimensions,
} from 'react-native';

import FAIcon from "react-native-vector-icons/FontAwesome";
import RBSheet from "../components/RBSheet";
import { Flag } from '../components/Flagkit';
import data from "../screens/staticArray.json";

import RBContainer from '../components/RBContainer';

let { height, width } = Dimensions.get('window');
const OFFSET = width / 2 - height / 2
class Test extends React.Component {

  navigateDetails = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    return (
      <>
        <StatusBar hidden />
        <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>
          <Flag
            id={'KR'}
            onPress={() => this.Scrollable.open()}
            width={height + 1} height={width + 1}
            style={{
              transform: [
                { rotateZ: '-90deg' },
                { translateX: OFFSET },
                { translateY: OFFSET }
              ],
              backgroundColor: 'black',
            }}
          />
          {/* <SvgComponent onPress={() => this.Scrollable.open()} width={`${height + 1}`} height={`${width + 1}`}
            style={{
              transform: [
                { rotateZ: '-90deg' },
                { translateX: OFFSET },
                { translateY: OFFSET }
              ],
              backgroundColor: 'black',
            }} /> */}

          {/* RBContainer에서 설정한 값을 받아오는 텍스트 표시 컴포넌트 작성 */}

          {/* Grid Menu */}
          <RBSheet
            ref={ref => {
              this.Scrollable = ref;
            }}
            animationType="fade"
            height={height / 2}
            closeOnDragDown
            customStyles={{
              container: {
                backgroundColor: "transparent",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }
            }}
            duration={100}
          >
            <RBContainer />
            {/* <ScrollView>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Write a comment..." />
              </View>
              <View style={styles.gridContainer}>
                {data.grids.map(grid => (
                  <TouchableOpacity
                    key={grid.icon}
                    onPress={() => this.Scrollable.close()}
                    style={styles.gridButtonContainer}
                  >
                    <View style={[styles.gridButton, { backgroundColor: grid.color }]}>
                      <FAIcon name={grid.icon} style={styles.gridIcon} />
                    </View>
                    <Text style={styles.gridLabel}>{grid.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <Button title="Sample" onPress={() => this.Scrollable.close()}></Button>
              <Button title='DETAILS' onPress={() => { this.Scrollable.close(); this.navigateDetails() }}></Button>
            </ScrollView> */}
          </RBSheet>

        </SafeAreaView>
      </>
    )
  }
}


import Svg, { Path, Circle } from 'react-native-svg'

const SvgComponent = props => (
  <Svg viewBox="0 0 900 600" {...props}>
    <Path fill="#fff" d="M-1 1h900v600H-1z" />
    <Circle cx={449} cy={301} r={150} fill="#cd2e3a" />
    <Path
      d="M324.2 217.8c-23 34.5-13.7 81 20.8 104s81 13.7 104-20.8 69.5-43.8 104-20.8c34.5 23 43.8 69.5 20.8 104-46 68.9-139.1 87.6-208 41.6s-87.6-139.1-41.6-208z"
      fill="#0047a0"
    />
    <Path d="M179.3 120L138 182l10.4 6.9 10.4 7 41.6-62.5L242 71l-9.7-6.5c-5.4-3.6-10.2-6.5-10.8-6.5-.5 0-19.6 27.9-42.2 62zM667.8 64.7l-9.7 6.5 19 28.4c10.4 15.6 19.1 28.4 19.4 28.4s5-3 10.5-6.7l10-6.6-1.7-2.7c-12.3-19.2-36-53.9-36.8-53.9-.5 0-5.4 3-10.7 6.6zM210.7 140.4l-41.6 62.4 10 6.6c5.4 3.6 10.2 6.6 10.7 6.6.9 0 83.6-123.9 83.1-124.4-.6-.5-18.3-12.2-19.5-12.9-.7-.4-17.4 23.8-42.7 61.7zM637.2 85.1c-6.5 4.5-10 7.4-9.5 8.1 6.3 10.3 81.7 122.4 82.4 122.7.6.2 5.5-2.7 11-6.3l9.9-6.6-41.1-61.8c-22.6-33.9-41.4-62-41.8-62.3-.3-.4-5.2 2.4-10.9 6.2zM242.5 160.6c-22.5 33.9-41.1 62-41.3 62.5-.5 1.3 19.7 14.4 20.7 13.3 1.4-1.5 81.2-121.5 81.7-122.8.3-.7-3.7-4.1-9.6-7.9-5.5-3.7-10.1-6.7-10.2-6.7-.2 0-18.7 27.8-41.3 61.6zM606.4 105.7c-5.4 3.6-10.1 6.7-10.3 6.9-.2.2 7.9 12.8 18 28s18.7 28.1 19 28.6c.9 1.4 21.1-12.3 20.4-13.9-.3-1-34.8-53.2-36.9-56-.1-.1-4.7 2.7-10.2 6.4zM714 131.6c-5.2 3.5-9.6 6.8-9.8 7.3-.3.8 34.1 53.4 36.7 56.3.6.7 9.9-5 17.8-10.9l3.3-2.4-19-28.4c-10.5-15.7-19.1-28.5-19.3-28.4-.1 0-4.5 2.9-9.7 6.5zM651.2 173.4c-5.1 3.5-9.5 6.5-9.8 6.9-.7.6 36.6 56.7 37.8 56.7 1.3 0 19.7-12.4 19.8-13.3 0-1.1-37.1-56.7-37.9-56.6-.3 0-4.8 2.9-9.9 6.3zM210.7 369.5c-5.3 3.6-9.7 6.8-9.7 7 0 .4 81.4 122.9 82.5 124.3.3.4 18-11.2 19.9-12.9.9-.8-80.9-124.9-82.3-124.9-.3 0-5 2.9-10.4 6.5zM659.6 391.1c-10.3 15.5-18.4 28.5-17.9 28.9 3.6 3.2 19.7 13 20.3 12.3 1.8-1.8 37-55.2 37-56-.1-.9-18.5-13.3-19.8-13.3-.5 0-9.3 12.7-19.6 28.1zM178.8 390.7l-9.7 6.5 19 28.4c10.4 15.6 19.1 28.4 19.4 28.4.5 0 18.3-11.7 19.8-13 1-.8-35.9-56.4-37.6-56.7-.7-.1-5.6 2.8-10.9 6.4zM690.6 412.1c-10.2 15.5-18.5 28.3-18.4 28.4.7.5 18.4 12.2 19.5 12.9.8.4 7.5-8.7 20.3-27.8l19-28.6-9.7-6.5c-5.4-3.6-10.3-6.5-10.9-6.5-.6 0-9.5 12.7-19.8 28.1zM148.3 411.1L138 418l41.3 62c22.6 34.1 41.7 62 42.2 62 .6 0 5.4-2.9 10.8-6.5l9.7-6.5-41.1-61.8c-22.6-33.9-41.4-62-41.8-62.3-.3-.4-5.2 2.4-10.8 6.2zM722.6 432c-10.2 15.4-18.6 28.4-18.6 28.8 0 .5 4.5 3.9 10 7.5l10 6.7 18.9-28.4c17.4-26.1 18.8-28.5 17.3-29.9-1.5-1.2-14.8-10.2-17.8-12-.7-.4-8.5 10.4-19.8 27.3zM614.6 458.5c-10.4 15.7-18.7 28.7-18.5 28.9 1.3 1.1 20.3 13.5 20.5 13.3 2.1-2.9 36.6-55 36.9-56 .4-.9-2.9-3.6-9.5-8-5.5-3.7-10.1-6.7-10.2-6.7-.2 0-8.8 12.9-19.2 28.5zM225 457.6c-5.2 3.5-9.6 6.8-9.8 7.3-.3.8 34.1 53.4 36.7 56.3.5.6 17.4-9.8 21-12.8.4-.4-37.2-57.4-37.9-57.3-.3 0-4.8 2.9-10 6.5zM660.8 457.2c-3.8 5.3-30.9 45.8-33.1 49.5-.5.8 2.8 3.6 9.6 8.2l10.5 7 18.6-28c10.2-15.3 18.6-28.3 18.6-28.9 0-.7-12.6-9.8-18.7-13.3-.7-.4-2.8 1.7-5.5 5.5zM677.1 500.4l-19 28.4 10 6.6c5.4 3.6 10.2 6.6 10.6 6.6.6 0 26.3-38 36.6-54l1.7-2.7-10-6.6c-5.5-3.7-10.2-6.7-10.5-6.7s-9 12.8-19.4 28.4z" />
  </Svg>
)

export default Test;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    marginBottom: 20
  },
  gridButtonContainer: {
    flexBasis: "25%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  gridIcon: {
    fontSize: 30,
    color: "white"
  },
  gridLabel: {
    fontSize: 14,
    paddingTop: 10,
    color: "#333"
  },
  inputContainer: {
    borderTopWidth: 1.5,
    borderTopColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
});