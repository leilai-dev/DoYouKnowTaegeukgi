import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { View } from 'react-native';

const SmartBannerAd = (props) => (
  <View {...props}>
    <BannerAd
      unitId={TestIds.BANNER}
      // unitId={`ca-app-pub-3538813092756784/7015732621`}
      size={BannerAdSize.SMART_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: false,
        testDevices: ['EMULATOR'],
      }}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}
      onAdFailedToLoad={(error) => {
        console.log('BannerAd Error', error)
        // console.error('Advert failed to load: ', error);
      }}
    />
  </View >
)

export default SmartBannerAd;