import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TopNavigation } from '@ui-kitten/components'
// import { HomeScreen } from './Test-reanimated-bottom-sheet';
import TestCrashHome from './TestCrashHome';
// import Home from './Home2';
import { DetailsScreen } from './Detail';
import { FlagListScreen } from './FlagListScreen';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: TestCrashHome,
    navigationOptions: {
      headerShown: false

    }
  },
  Details: DetailsScreen,
  FlagList: {
    screen: FlagListScreen,
    navigationOptions: {
      title: 'Flag List',
      // headerShown: true

      // header: TopNavigation,
      // headerMode: 'screen'
    }
  }
}, {
  headerMode: 'screen',
});

export const AppNavigator = createAppContainer(HomeNavigator);