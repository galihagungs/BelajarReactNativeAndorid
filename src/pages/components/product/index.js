import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ROG from '../../../assets/image/rog.jpg';

const Product = (props) => {
  return (
    <View style= {styles.wrapperprod}>
        <Image source={ROG} style={{width: 188, height: 107,borderRadius:8}}/>
        <Text style={styles.titleProd}>ROG Ally Z1 Extreme</Text>
        <Text style={styles.pricePord}>Rp. 9.000.000</Text>
        <Text style={styles.placeProd}>Jakarta Timur</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
            <View style={styles.btnbackbuy}>
                <Text style={styles.btntetxtbuy}>BELI</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    wrapperprod:{
    padding: 12, backgroundColor:'grey',borderRadius:8, width:212
  },
  titleProd:{
    fontSize:14, fontWeight:'bold', marginTop:16
  },
  pricePord:{ 
    fontSize:12, fontWeight:'bold', marginTop:13, color: '#F2994A'
  },
  placeProd:{ 
    fontSize:12, fontWeight:'300', marginTop:12 
  },
  btnbackbuy:{ 
    backgroundColor:'#6FCF97', paddingVertical: 6, borderRadius:25, marginTop:20
  },
  btntetxtbuy:{ 
    fontSize:14, fontWeight:'600', color:'white', textAlign:'center'
  }
})