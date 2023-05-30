import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import ImplementStylingComponent from './ImplementStylingComponent';
import FlexBox from './FlexBox';
import FlexBoxImplement from './FlexBoxImplement';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <ImplementStylingComponent /> */}
        <FlexBox/>
        <FlexBoxImplement/>
      </ScrollView>
      
    </View>
  );
};

export default App;
