/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Appearance
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BaseStack from './src/navigations/BaseStack';
import { navigationRef } from './src/navigations/NavigationRef';
import { ToastProvider } from 'react-native-toast-notifications';


function App(): React.JSX.Element {
  useEffect(() => {
    Appearance.setColorScheme('light'); // Force Light Mode
  }, []);
  return (
    <ToastProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer ref={navigationRef}>
          <BaseStack />
        </NavigationContainer>
      </SafeAreaView>
    </ToastProvider>
  );
}


export default App;
