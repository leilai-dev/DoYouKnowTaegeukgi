import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ApplicationProvider } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './screens/Navigation';
import KeepAwake from 'react-native-keep-awake';

import ContextsProvider from './contexts';

import { setI18nConfig, getCurrentLanguage, setCurrentLanguage } from '../src/utils/i18n'
import * as RNLocalize from 'react-native-localize'

import crashlytics from '@react-native-firebase/crashlytics';
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTranslationLoaded: false,
      _error: '',
    }

    setI18nConfig()
      .then(async () => {
        this.setState({ isTranslationLoaded: true })
        SplashScreen.hide();
        
        RNLocalize.addEventListener('change', this.handleLocalizationChange)
        // 언어 설정 Context 추가하기? > i18n이 한다
        const { languageTag } = await getCurrentLanguage()
        // console.log('setting', languageTag)
        // setCurrentLanguage 하고
      })
      .catch(error => {
        this.setState({ _error: error })
        crashlytics().recordError(error);
      })
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange)
  }

  handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => this.forceUpdate())
      .catch(error => {
        crashlytics().recordError(error);
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
        <SafeAreaView style={{}}>
          <Text>isError? : {this.state._error}</Text>
        </SafeAreaView>
      )
  }
}
