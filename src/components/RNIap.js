import React from 'react';
import * as RNIap from "react-native-iap"
import { Platform } from 'react-native';

// Purchase items
export const itemSkus = Platform.select({
  // ios: [
  //   "INSERT YOUR PURCHASE ID IOS"
  // ],
  android: [
    "android.doyouknowtaegeukgi.remove_ad", // 별도 상수로 빼야하나?
    "android.test.purchased"
  ]
});

export const initConnection = async () => {
  try {
    return result = await RNIap.initConnection();
  } catch (error) {
    console.log(error.code, error.message);
  }
}

export const getItems = async () => {
  try {
    // return products = await RNIap.getProducts(itemSkus);
    const products = await RNIap.getProducts(itemSkus);
    console.log('Products', products, itemSkus);
    return products;
  } catch (error) {
    console.log(error.code, error.message);
  }
}

