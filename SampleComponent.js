import React, { Component } from 'react';

import {Image, Text, TextInput, View} from 'react-native';

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

export default SampleComponent;