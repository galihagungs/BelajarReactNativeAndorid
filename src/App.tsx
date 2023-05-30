import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import PositionReactNative from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent/>
        <FlexBox/>
        <PositionReactNative/>

      </ScrollView>
      
    </View>
  );
};

export default App;
