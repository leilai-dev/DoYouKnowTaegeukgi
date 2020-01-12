import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Layout, Input,
  List,
  ListItem,
  Button,
} from '@ui-kitten/components';

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
  const { setCountryCode } = useContext(FlagCodeContext);
  const [countryName, setCountryName] = useState('');
  const [filterData, setFilterData] = useState([]);

  const renderItemAccessory = (countryCode) => (
    <Button
      style={{
        fontSize: 24,
      }}
      onPress={() => {
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

  const renderItem = ({ item }) => {
    return (
      <ListItem
        titleStyle={{
          fontSize: 20,
        }}
        title={`${item.countryName}`}
        accessory={() => renderItemAccessory(item.countryCode)}
        icon={() => countryFlag(item.countryCode)}
      />
    )
  }

  return (
    <SafeAreaView>
      <Input
        textStyle={{ fontSize: 20 }}
        placeholder={'국가 검색 (English only)'}
        onChangeText={(e) => {
          setCountryName(e);
          setFilterData(data.filter(elem => elem.countryName.toLowerCase().includes(countryName)));
        }}
        onSubmitEditing={(e) => {
          setFilterData(data.filter(elem => elem.countryName.toLowerCase().includes(countryName.toLowerCase())));
        }}
      />
      {
        countryName.length === 0 && filterData.length === 0
          ? <List
            data={data}
            renderItem={renderItem}
          />
          : filterData.length === 0
            ? <ListItem
              title='No search result'
              titleStyle={{
                fontSize: 20, textAlign: 'center'
              }}
            />
            : <List
              data={filterData}
              renderItem={renderItem}
            />
      }
      {/* 검색 결과 없습니다 만들까? */}
    </SafeAreaView>
  );
}