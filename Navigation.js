import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { HomeScreen } from './Test-reanimated-bottom-sheet';
import Home from './Home2';
import { DetailsScreen } from './Detail';

const HomeNavigator = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);