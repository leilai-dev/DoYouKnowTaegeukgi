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
  Settings: DetailsScreen,
  FlagList: {
    screen: FlagListScreen,
    navigationOptions: {
      title: 'Flag List',
      // header: TopNavigation,
      // headerMode: 'screen'
    }
  }
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#3366FF',
      color: '#EDF1F7'
    },
    headerTintColor: '#EDF1F7',
    headerTitleStyle: { color: '#EDF1F7' },
  }
});

export const AppNavigator = createAppContainer(HomeNavigator);