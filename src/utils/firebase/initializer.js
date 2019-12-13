import { Platform } from 'react-native';
import firebase from '@react-native-firebase/app';
import config from './googleServiceConfig';

// pluck values from your `GoogleService-Info.plist` you created on the firebase console
const iosConfig = {
  clientId: 'x',
  appId: 'x',
  apiKey: 'x',
  databaseURL: 'x',
  storageBucket: 'x',
  messagingSenderId: 'x',
  projectId: 'x',

  // enable persistence by adding the below flag
  persistence: true,
};

// pluck values from your `google-services.json` file you created on the firebase console
const androidConfig = {
  clientId: config.client[0].oauth_client[0].client_id,
  appId: config.client[0].client_info.mobilesdk_app_id,
  apiKey: config.client[0].api_key[0].current_key,
  databaseURL: 'x',
  storageBucket: config.project_info.storage_bucket,
  messagingSenderId: 'x',
  projectId: config.project_info.project_id,

  // enable persistence by adding the below flag
  persistence: true,
};

let firebaseApp;

try {
  firebaseApp = firebase.initializeApp(
    Platform.OS === 'ios' ? iosConfig : androidConfig,
  )
    .then(app => console.log('initialized apps ->', firebase.apps));

} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export default firebaseApp;

// export const firebaseApp = firebase
//   .initializeApp(
//     // use platform-specific firebase config
//     Platform.OS === 'ios' ? iosConfig : androidConfig,
//     // name of this app
//   )
//   .then(app => console.log('initialized apps ->', firebase.apps));
