import React, { useContext } from 'react';
import { SafeAreaView, Image } from 'react-native';
import {
  Layout, Input, Icon, ButtonGroup,
  List,
  ListItem,
  Button,
} from '@ui-kitten/components';
import { NavigationContext } from 'react-navigation';

import { flagSvgs, Flag } from '../components/Flagkit'

import { FlagCodeContext } from '../contexts/FlagCodeContext';

const data = flagSvgs.map((elem) =>
  ({
    countryName: elem.region,
    countryCode: elem.code,
    svgComponent: elem.component
  })
);

export const FlagListScreen = ({ navigation }) => {
  // console.log(navigation)
  // console.log(data);
  const { setCountryCode } = useContext(FlagCodeContext);
  // const navigation = useContext(NavigationContext);

  const renderItemAccessory = (countryCode) => (
    <Button
      style={{
        fontSize: 24,
      }}
      onPress={() => {
        console.log(countryCode)
        setCountryCode(countryCode)
        navigation.goBack();
      }}
    >선택</Button>
  );

  const countryFlag = (id) => (
    <Layout
      style={{ top: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}
    >
      <Flag
        id={id}
        width={32}
        height={32}
      />
    </Layout>
  )

  // const RemoteStarIcon = (test) => {
  //   console.log(test);
  //   return (
  //     <Image
  //       // style={style}
  //       source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png' }}
  //     />
  //   )
  // }

  const renderItem = ({ item }) => {
    // console.log(item)
    return (

      <ListItem
        style={{
          // justifyContent: 'space-between'

        }}
        titleStyle={{
          fontSize: 24,
          // alignItems: 'center'

        }}
        title={`${item.countryName}`}
        accessory={() => renderItemAccessory(item.countryCode)}
        icon={() => countryFlag(item.countryCode)}
      />
    )
  }

  return (
    <SafeAreaView>
      <List
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}