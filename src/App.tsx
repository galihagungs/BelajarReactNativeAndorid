import React, { Component, useEffect, useState } from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import PositionReactNative from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import StylingComponent from './pages/StylingComponent';
import BasicJavascript from './pages/BasicJavascript';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() =>{
  //   setTimeout(() =>{
  //     SetIsShow(false);
  //   }, 6000);
  // });
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <StylingComponent /> */}
        {/* {isShow && <FlexBox/>} */}
        {/* <FlexBox/> */}
        {/* <PositionReactNative/> */}
        {/* <PropsDinamis/> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        <BasicJavascript/>

      </ScrollView>
      
    </View>
  );
};

export default App;
