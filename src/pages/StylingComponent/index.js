import React, { Component } from 'react';

import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import ROG from '../../assets/image/rog.jpg';

const StylingComponent = () => {
  return (
    <View>
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
            borderRadius:2 }}> 
            </View>
        </View>
        <View style= {{ padding: 12, backgroundColor:'grey',borderRadius:8, width:212,}}>
            <Image source={ROG} style={{width: 188, height: 107,borderRadius:8}}/>
            <Text style={{ fontSize:14, fontWeight:'bold', marginTop:16 }}>ROG Ally Z1 Extreme</Text>
            <Text style={{ fontSize:12, fontWeight:'bold', marginTop:13, color: '#F2994A'}}>
            Rp. 9.000.000
            </Text>
            <Text style={{ fontSize:12, fontWeight:'300', marginTop:12 }}>Jakarta Timur</Text>
            <View style={{ backgroundColor:'#6FCF97', paddingVertical: 6, borderRadius:25, marginTop:20}}>
            <Text style={{ fontSize:14, fontWeight:'600', color:'white', textAlign:'center'}}>BELI</Text>
            </View>
        </View>
    </View>
  )
}

export default StylingComponent

const styles = StyleSheet.create({})