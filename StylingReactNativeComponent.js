import React, { Component } from 'react';

import {StyleSheet, Text,  View} from 'react-native';

const StylingReactNativeComponent = () =>{
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View style= {{ 
          width: 100, 
          height:100, 
          backgroundColor:'#3498db',
          borderWidth: 5, 
          borderColor:"#1abc9c",
          alignSelf:'center',
          marginTop: 20,
          borderRadius:2 }}></View>
      </View>
    );
}
  
const styles = StyleSheet.create({
    text:{
      fontSize: 18,
      fontWeight:'bold',
      color: '#2ecc71',
      marginLeft:20,
      marginTop:50
    }
});

export default StylingReactNativeComponent;