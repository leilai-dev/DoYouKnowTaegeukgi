import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { FlagCodeContext } from '../contexts/FlagCodeContext'
// import { Icon } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign'
import { Flag } from './Flagkit';


import { InterstitialAd, TestIds, AdEventType } from '@react-native-firebase/admob';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
  requestNonPersonalizedAdsOnly: false,
});



export default RBCButton = (props) => {
  const navigation = useContext(NavigationContext);
  const { countryCode } = useContext(FlagCodeContext);

  const advert = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: false,});
  // advert.onAdEvent((type) => {
  //   if (type === AdEventType.LOADED) {
  //     // interstitial.show();
  //     console.log('loaded')
  //   }
  //   if (type === AdEventType.CLOSED) {
  //     // advert.load();
  //   }
  // });
  advert.load()

  return (
    <TouchableOpacity style={{
      justifyContent: 'flex-start',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      padding: 8
    }}
      onPress={() => {
        props.close();
        setTimeout(() => navigation.navigate('FlagList'), 300);

        if (Math.random() < 0.2)
          setTimeout(() => advert.show(), 500);
      }}
    >
      <Icon
        name='earth'
        size={32}
        color='#EDF1F7'
      />
      <Icon name='swap' size={24}
        color='#EDF1F7'
        style={{
          left: -3, zIndex: 1,
        }}
      />
      <Flag id={countryCode} width={28} height={28}
        style={{ left: 4 }}
        onPress={() => {
          props.close();
          setTimeout(() => navigation.navigate('FlagList'), 1000);
        }}
      />
    </TouchableOpacity>
  )
}