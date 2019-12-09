import React from 'react';
import { SafeAreaView } from 'react-navigation';
// import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { View, Text, Button } from 'react-native';

import crashlytics from '@react-native-firebase/crashlytics';

function forceCrash() {
  crashlytics().log('Testing crash');
  crashlytics().crash();
}

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const DetailsScreen = ({ navigation }) => {

  const navigateBack = () => {
    forceCrash();
    navigation.goBack();
  };

  // const BackAction = () => (
  //   <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  // );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='MyApp' alignment='center' leftControl={BackAction()} /> */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
        <Button title='Back' onPress={navigateBack}></Button>
      </View>
    </SafeAreaView>
  );
};