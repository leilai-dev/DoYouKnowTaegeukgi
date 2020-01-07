import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { ApplicationProvider } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './screens/Navigation';
import KeepAwake from 'react-native-keep-awake';

import ContextsProvider from './contexts';

import { setI18nConfig } from '../src/utils/i18n'
import * as RNLocalize from 'react-native-localize'

import { firebase, } from '@react-native-firebase/admob';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTranslationLoaded: false
    }
    setI18nConfig()
      .then(() => {
        this.setState({ isTranslationLoaded: true })
        RNLocalize.addEventListener('change', this.handleLocalizationChange)
        // 언어 설정 Context 추가하기? > i18n이 한다
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange)
  }

  handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => this.forceUpdate())
      .catch(error => {
        console.error(error)
      })
  }

  // componentDidMount() {
  //   console.log(firebase.apps);
  // }

  render() {
    const { isTranslationLoaded } = this.state;
    return isTranslationLoaded
      ? (
        <React.Fragment>
          <ContextsProvider>
            <ApplicationProvider mapping={mapping} theme={theme}>
              <AppNavigator />
              <KeepAwake />
            </ApplicationProvider>
          </ContextsProvider>
        </React.Fragment>
      )
      : (
        <SafeAreaView style={{}} />
      )
  }
}
