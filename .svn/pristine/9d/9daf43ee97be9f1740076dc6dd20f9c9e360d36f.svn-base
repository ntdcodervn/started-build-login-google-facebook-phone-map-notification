import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import OneSignal from 'react-native-onesignal';
import auth from '@react-native-firebase/auth';
import MainContainer from './router/MainContainer';
//abc4789asdads
const appId = '91992659-9684-4105-9346-44b8423e3520';

const App = () => {
  useEffect(() => {
    OneSignal.init(appId);
    OneSignal.setLogLevel(6, 0);

    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init('YOUR_ONESIGNAL_APP_ID', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.

    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);

    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  const onReceived = notification => {
    console.log('Notification received: ', notification);
  };

  const onOpened = openResult => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  const onIds = device => {
    console.log('Device info: ', device);
  };

  const myiOSPromptCallback = permission => {
    // do something with permission value
  };

  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return <MainContainer />;
};

export default App;
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 300,
    backgroundColor: 'blue',
  },
});
