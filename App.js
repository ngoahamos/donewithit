import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo'

import AuthNavigation from './app/nativations/AuthNavigation'
import NavigationTheme from './app/nativations/NavigationTheme';
import AppNavigator from './app/nativations/AppNavigation';
import Screen from './app/components/Screen';
import AppText from './app/components/AppText';


const App = () => {
  NetInfo.fetch().then(netInfo => console.log(netInfo));

  return (
    // <NavigationContainer theme={NavigationTheme}>
    //   <AppNavigator />
    // </NavigationContainer>
    <Screen>
      <AppText>Nice</AppText>
    </Screen>
  )
}


export default App;
