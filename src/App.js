import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './screens/Navigation';
import Main from './screens/Main';
// import { firebase } from '@react-native-firebase/analytics'


// firebase.initializeApp()
const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <Main />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;