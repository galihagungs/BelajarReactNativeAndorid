import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Cart from '../components/cart'
import Product from '../components/product'

const Communication = () => {
    const [totalProd, setTotalProd] = useState(0);
  return (
    <View style ={styles.container}>
      <Text style = {styles.textTitle}>Materi Komunikasi Antar Komponen</Text>
      <Cart quantity = {totalProd}/>
      <Product onButtonPress = {() => setTotalProd(totalProd+1)}/>
    </View>
  )
}

export default Communication

const styles = StyleSheet.create({
    container: {padding:20},
    textTitle: {textAlign:'center'}
})