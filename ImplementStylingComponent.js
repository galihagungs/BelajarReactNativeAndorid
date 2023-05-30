import React from 'react';

import {Image,Text, View} from 'react-native';

import ROG from './rog.jpg';

const ImplementStylingComponent = ()=>{
    return (
      <View style= {{ padding: 12, backgroundColor:'#f2f2f2',borderRadius:8, width:212,}}>
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
    );
}

export default ImplementStylingComponent;