import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import iconcart from '../../../assets/icon/cart.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.warpbtn}>
          <Image source={iconcart} style={styles.iconbtn}/>
          <Text style={styles.notif}>{props.quantity}</Text>
        </View>
      <Text style={styles.textbtn}>Keranjang Belanja Anda</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    warpbtn:{
        borderWidth:1, 
        borderColor:'#4398D1',
        width:100,
        height:100,
        borderRadius:100/2,
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    iconbtn:{
        width:61,
        height:50,
    },
    textbtn:{
        color:'#777777',
        fontWeight:'700',
        fontSize:12,
        marginTop:8
    },
    notif:{
        fontSize:12,
        color:'white',
        backgroundColor:'#6FCF97',
        padding:4,
        width:24,
        height:24,
        borderRadius:25,
        position:'absolute',
        top:0,
        right:0
    }
})