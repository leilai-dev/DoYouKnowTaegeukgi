import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { View } from 'react-native';

const SmartBannerAd = (props) => (
  <View {...props}>
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.SMART_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}
      onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);
      }}
    />
  </View >
)

export default SmartBannerAd;