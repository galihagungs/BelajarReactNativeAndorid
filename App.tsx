import React, { Component } from 'react';

import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

import ROG from './rog.jpg';

const App = () => {
  return (
    <View>
      <ImplementStylingComponent />
    </View>
  );
};
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

const SampleComponent = ()=>{
  return (
    <View>
      <Text>Functional Component</Text>
      <View style={{ width: 80,height:80, backgroundColor:'#3498db' }}/>
      <Text>Galih</Text>
      <Text>Agung</Text>
      <Text>Sukmawan</Text>
      <Home />
      <Foto/>
      <TextInput style ={{ marginHorizontal:5 ,marginTop:10,borderWidth:1}}/>
      {/* //class component */}
      <BoxGreen/>
      <Profile/>
    </View>
  );

}

const Home = () => {
  return <Text>Home</Text>;
};

const Foto = ()=> {
  return <Image source={{ uri:'https://placeimg.com/100/100/tech' }} style={{ width: 100,height:100 }}/>
}

class BoxGreen extends Component {
  render() {
    return <Text>Component dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image 
        source={ {uri:'https://placeimg.com/100/100/animals'}} 
        style={{ width: 100,height:100, borderRadius:50}}
        />
        <Text style={{ color: 'blue', fontSize:24}}>Ini Hewan</Text>
      </View>
    );
  }
}
export default App;
