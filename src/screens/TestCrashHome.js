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

import RBSheet from "../components/RBSheet";
import { Flag } from '../components/Flagkit';

import RBContainer from '../components/RBContainer';

import TextDisplayArea from './TextDisplayArea';

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
          <View style={styles.flagArea}>
            <Flag
              id={'KR'}
              // onPress={() => this.Scrollable.open()}
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
                  borderTopRightRadius: 10,
                  borderWidth: 5,
                }
              }}
              duration={100}
            >
              <RBContainer {...this.props} />

            </RBSheet>
          </View>

          <TextDisplayArea onPress={() => this.Scrollable.open()} />

        </SafeAreaView>
      </>
    )
  }
}

export default Test;

const styles = StyleSheet.create({
  flagArea: {
    position: 'absolute',
  }
});