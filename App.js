/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Root } from "native-base"
import { createStackNavigator, createAppContainer } from "react-navigation"
import HargaUdang from './src/component/HargaUdang/HargaUdang'
import DetailHargaUdang from './src/component/DetailHargaUdang/DetailHargaUdang'

const App = createStackNavigator(
  {
    Home: {
      screen: HargaUdang
    },
    Detail : {
      screen : DetailHargaUdang
    }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        flexGrow:1,
        alignSelf:'center',
        alignItems: 'center'
      },
    },
  }
);

export default createAppContainer(App);
