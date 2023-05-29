import React from 'react';

import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{ width: 80,height:80, backgroundColor:'#3498db' }}/>
      <Text>Galih</Text>
      <Text>Agung</Text>
      <Text>Sukmawan</Text>
      <Home />
      <Foto/>
      <TextInput style ={{ marginHorizontal:5 ,marginTop:10,borderWidth:1}}/>
    </View>
  );
};

const Home = () => {
  return <Text>Home</Text>;
};

const Foto = ()=> {
  return <Image source={{ uri:'https://placeimg.com/100/100/tech' }} style={{ width: 100,height:100 }}/>
}
export default App;
