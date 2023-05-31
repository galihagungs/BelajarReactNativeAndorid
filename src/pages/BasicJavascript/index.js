import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasicJavascript = () => {

    //Primitive
    const name = 'Galih Agung S'; //String
    let age = 24; //Number
    const isMale = true // Boolean

    //Complex
    const hewanPeliharaan ={
        nama:'Kiko',
        jenis:'Kucing',
        usia:'4',
        apaHewanLokal: false,
        warna: 'Orange',
        orangTua: {
            jantan: 'kaisar',
            betina: 'Dewi',
        },
    };

    const sapaOrang = (name, age) =>{
        return console.log(`Hello, ${name} usia anda ${age}`);
    }; //Function

    sapaOrang('Galih', 24);

    const namaOrang = ['Galih', 'Mila', 'Hardian','Fajry']; //Array
    
    const sapaHewan = (objectHewan) =>{
        // let hasilSapa ='';
        // if(objectHewan.nama == 'Kiko'){
        //     hasilSapa = 'Halo Kiko';
        // }else{
        //     hasilSapa = 'Hewan siapa ini?';
        // };
        return objectHewan.nama == 'Kiko' ? 'Halo Kiko' : 'Hewan siapa ini?';

    }
  return (
    <View style={styles.container}>
      <Text styles={styles.textTitle}>BasicJavascript</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>============</Text>
      {namaOrang.map((orang)=><Text>{orang}</Text>)}
    </View>
  )
}

export default BasicJavascript

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign:'center'}
})