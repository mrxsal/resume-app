import React from 'react';
import { NativeBaseProvider, Text, ScrollView } from 'native-base';
// import Navigator from './app/navigation/Navigator';
import MainDrawer from './app/navigation/MainDrawer';
import MainTheme from './app/themes/MainTheme';

const Main = () => {
  return (
    <NativeBaseProvider theme={MainTheme}>
        <MainDrawer />
        {/* <Navigator /> */}
    </NativeBaseProvider>
  )
}
export default Main;
