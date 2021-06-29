/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {App} from './navigators/index';

import {FormMasuk} from './src/screens/Autentikasi';
import {FormPeminjaman} from './src/screens/Peminjaman';
import {Dashboard} from './src/screens/Dashboard';
import {store} from './store';

const Root = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <Provider store={store}>
    //   <App />
    // </Provider>
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <Dashboard />
    </Fragment>
  );
};

export default Root;
