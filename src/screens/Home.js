// Detail 페이지 이동 후 뒤로가기 호출시 강제 종료 테스트를 위한 홈
import React, { useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import RBSheet from "../components/RBSheet";
import { Flag } from '../components/Flagkit';
import RBContainer from '../components/RBContainer';
import TextDisplayArea from './TextDisplayArea';
import { FlagCodeContext } from '../contexts/FlagCodeContext';

let { height, width } = Dimensions.get('window');
const OFFSET = width / 2 - height / 2

export const Home = (props) => {
  const { countryCode } = useContext(FlagCodeContext);

  navigateDetails = () => {
    props.navigation.navigate('Details');
  };

  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>
        <View style={styles.flagArea}>
          <Flag
            id={countryCode}
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
            height={(height / 5) * 3}
            closeOnDragDown
            customStyles={{
              container: {
                backgroundColor: "transparent",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderLeftWidth: 2,
                borderRightWidth: 2,
                borderColor: '#3366FF'
              }
            }}
            duration={100}
          >
            <RBContainer {...props} />

          </RBSheet>
        </View>

        <TextDisplayArea onPress={() => this.Scrollable.open()} />

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  flagArea: {
    position: 'absolute',
  }
});