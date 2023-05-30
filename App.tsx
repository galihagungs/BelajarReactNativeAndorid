import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import ImplementStylingComponent from './ImplementStylingComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReactNativeComponent />
        <ImplementStylingComponent />
      </ScrollView>
      
    </View>
  );
};

export default App;
