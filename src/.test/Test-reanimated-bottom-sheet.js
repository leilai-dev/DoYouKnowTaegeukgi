import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
// import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
// import BottomDrawer from 'rn-bottom-sheet';
import BottomSheet from 'reanimated-bottom-sheet'

const TAB_BAR_HEIGHT = 0;

export const HomeScreen = ({ navigation }) => {
  const [toggle, setToggle] = useState(0)

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const renderContent = () => (
    <View style={{ height: '100%', backgroundColor: 'transperent' }}>
      <Text
        style={{ backgroundColor: 'yellow' }}
      >renderContent</Text>
      <Button title='DETAILS' onPress={navigateDetails}></Button>

    </View>
  )

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  )
  const bs = React.createRef()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='MyApp' alignment='center' /> */}
      {/* <Divider /> */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={() => bs.current.snapTo(0)}>
          {/* <Button title={`TOGGLE ${toggle}`} onPress={() => setToggle(!toggle ? 1 : 0)}></Button>
          <Button onPress={() => { console.log('snap to 0'); return bs.current.snapTo(0) }} title="0" />
          <Button onPress={() => bs.current.snapTo(1)} title="1" /> */}
          <Button onPress={() => bs.current.snapTo(1)} title="2" />
        </TouchableWithoutFeedback>
        <Button title='DETAILS' onPress={navigateDetails}></Button>
        <BottomSheet
          ref={bs}
          snapPoints={[0, 300, '80%']}
          initialSnap={0}
          renderContent={renderContent}
          renderHeader={renderHeader}
          enabledContentGestureInteraction
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
});
