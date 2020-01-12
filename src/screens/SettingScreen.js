import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Icon, Layout, Text } from '@ui-kitten/components';
import { View, Button, Alert, Platform } from 'react-native';

import { initConnection, getItems, itemSkus } from '../components/RNIap';
import RNIap, {
  finishTransaction,
  purchaseErrorListener,
  purchaseUpdatedListener,
  requestPurchase,
  getAvailablePurchases,
  acknowledgePurchaseAndroid

} from 'react-native-iap';

import crashlytics from '@react-native-firebase/crashlytics';

// function forceCrash() {
//   crashlytics().log('Testing crash');
//   crashlytics().crash();
// }
let purchaseUpdateSubscription;
let purchaseErrorSubscription;

export class SettingScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPurchasedRemoveAd: false,
      isProductsLoading: false,
      receipt: 'X',
      _proudcts: '',
      _purchaseError: {
        code: '', message: '',
      },
      _purchases: '',
      _itemSkus: '',
    }
  }

  async componentDidMount() {
    const result = await initConnection();
    console.log('result', result);

    this.setState({
      _itemSkus: itemSkus.toString()
    })

    const products = await getItems();
    const productStr = products.map(item => item.productId).toString()
    let isProductsLoading = products.length > 0 ? true : false;
    console.log('product loading', isProductsLoading);
    this.setState({
      _products: productStr,
      isProductsLoading,
    })

    purchaseUpdateSubscription = purchaseUpdatedListener(
      async (purchase) => {
        console.log('purchaseUpdatedListener', purchase);
        const receipt = purchase.transactionReceipt;
        if (receipt) {
          try {
            // if (Platform.OS === 'ios') {
            //   finishTransactionIOS(purchase.transactionId);
            // } else if (Platform.OS === 'android') {
            //   // If consumable (can be purchased again)
            //   consumePurchaseAndroid(purchase.purchaseToken);
            //   // If not consumable
            // }
            acknowledgePurchaseAndroid(purchase.purchaseToken);
            const ackResult = await finishTransaction(purchase, false);
          } catch (ackErr) {
            console.warn('ackErr', ackErr);
          }

          console.log(ackResult)

          // this.setState({ receipt }, () => this.goNext());
        }
      },
    );

    purchaseErrorSubscription = purchaseErrorListener(
      (error) => {
        console.log('purchaseErrorListener', error);
      },
    );
  }

  componentWillUnmount() {
    if (purchaseUpdateSubscription) {
      purchaseUpdateSubscription.remove();
      purchaseUpdateSubscription = null;
    }
    if (purchaseErrorSubscription) {
      purchaseErrorSubscription.remove();
      purchaseErrorSubscription = null;
    }
  }

  getProduct = async () => {
    try {
      const products = await RNIap.getProducts(itemSkus);
      console.log(itemSkus, products)
      this.setState({
        _products: products.map(item => item.productId).toString()
      })
      console.log(products);
    } catch (error) {

    }
  }

  requestPurchaseRemoveAd = async (_itemSkus) => {
    try {
      await RNIap.requestPurchase(_itemSkus, false);
    } catch (err) {
      console.warn(err.code, err.message);

      this.setState({ _purchaseError: { code: err.code, message: err.message } });
    }
  };

  getAvailablePurchases = async () => {
    try {
      const purchases = await RNIap.getAvailablePurchases();
      console.log('getAvailablePurchases', purchases);
      this.setState({ _purchases: purchases.map(item => item.productId).toString() });

      if (purchases && purchases.length > 0) { // 단일구매니까 그냥 set해버리기
        // 복구 로직 여기서.
        // 기기 구매 상태 저장
        // 
        this.setState({
          isPurchasedRemoveAd: true,
          receipt: purchases[0].transactionReceipt,
        });
      }
    } catch (error) {
      console.warn(error);
      Alert.alert(error.message);
    }
  }

  navigateBack = () => {
    // forceCrash();
    this.props.navigation.goBack();
  };

  resetText = () => {
    this.setState({
      _products: '',
      _purchaseError: { code: '', message: '' },
      _purchases: ''
    })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>itemSkus: {this.state._itemSkus}</Text>
          <Text>products: {this.state._products}</Text>
          <Text>Purchase Error: {this.state._purchaseError.code, this.state._purchaseError.message} </Text>
          <Text>Purchases: {this.state._purchases} </Text>
          <Text category='h1'>Settings</Text>
          <Button title='Back' onPress={this.navigateBack}></Button>
          <Button title='언어 변경' onPress={() => this.navigateBack}></Button>
          <Button title='광고제거구매' onPress={() => this.requestPurchaseRemoveAd(itemSkus[0])}></Button>
          <Button title='test구매' onPress={() => this.requestPurchaseRemoveAd(itemSkus[1])}></Button>
          <Text>구매상태: {this.state.isPurchasedRemoveAd.toString()}</Text>
          <Button title='구매 복원' onPress={this.getAvailablePurchases}></Button>
          <Text>복원여부: {this.state.receipt}</Text>
          <Button title='reset text' onPress={this.resetText}></Button>
          <Button title='GetProduct' onPress={() => this.getProduct()}></Button>
        </View >
      </SafeAreaView >
    )
  }
}