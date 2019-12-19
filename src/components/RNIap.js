import React from 'react';
import * as RNIap from "react-native-iap"
import { Platform } from 'react-native';

// Purchase items
const itemSkus = Platform.select({
  // ios: [
  //   "INSERT YOUR PURCHASE ID IOS"
  // ],
  android: [
    "android.doyouknowtaegeukgi.remove_ad" // 별도 상수로 빼야하나?
  ]
});