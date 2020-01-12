import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Home} from './Home';
import { SettingScreen } from './SettingScreen';
import { FlagListScreen } from './FlagListScreen';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Settings'
    }
  },
  FlagList: {
    screen: FlagListScreen,
    navigationOptions: {
      title: 'Flag List',
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