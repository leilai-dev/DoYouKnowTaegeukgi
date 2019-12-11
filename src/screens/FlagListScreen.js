import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import {
  Layout, Input, Icon, ButtonGroup,
  List,
  ListItem,
  Button,
} from '@ui-kitten/components';

import { flagSvgs, Flag } from '../components/Flagkit'

const data = flagSvgs.map((elem) =>
  ({
    countryName: elem.region,
    countryCode: elem.code,
    svgComponent: elem.component
  })
);

// const data = new Array(10).fill({ title: 'Country Name' })
// /* 
// [{
//   // code: 'AD',
//   // region: 'Andorra',
//   // component: Ad,
//   // img: require('./PNG/AD.png')
// }, ...]
// */


export const FlagListScreen = ({ navigation }) => {
  // console.log(navigation)
  // console.log(data);
  const renderItemAccessory = (style) => (
    <Button
      style={{
        fontSize: 24,
        ...style
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
        accessory={renderItemAccessory}
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