import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { FlagCodeContext } from '../contexts/FlagCodeContext'
import { Icon } from '@ui-kitten/components';
import { Flag } from './Flagkit';

export default RBCButton = (props) => {
  const navigation = useContext(NavigationContext);
  const { countryCode } = useContext(FlagCodeContext);

  return (
    <TouchableOpacity style={{
      justifyContent: 'flex-start',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      padding: 8
    }}
      onPress={() => {
        props.close();
        setTimeout(() => navigation.navigate('FlagList'), 1000);
      }}
    >
      <Icon
        name='globe-outline'
        width={32}
        height={32}
      // fill='#FF7E6D'
      />
      <Icon name='swap' width={24} height={24}
        style={{ left: 6, zIndex: 1, }}
      />
      <Flag id={countryCode} width={28} height={28}
        style={{ left: 8 }}
        onPress={() => {
          props.close();
          setTimeout(() => navigation.navigate('FlagList'), 1000);
        }}
      />
    </TouchableOpacity>
  )
}