import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { FlagCodeContext } from '../contexts/FlagCodeContext'
// import { Icon } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign'
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