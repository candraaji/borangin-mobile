import React from 'react';
import {View} from 'react-native';
import {Navigation} from './router';

const App = ({}) => (
  <View style={{flex: 1, flexDirection: 'column'}}>
    <Navigation />
  </View>
);

export {App};
