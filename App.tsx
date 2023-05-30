import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import ImplementStylingComponent from './ImplementStylingComponent';
import FlexBox from './FlexBox';
import FlexBoxImplement from './FlexBoxImplement';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <ImplementStylingComponent />
        <FlexBox/>
        <FlexBoxImplement/> */}
        <PositionReactNative/>
      </ScrollView>
      
    </View>
  );
};

export default App;
