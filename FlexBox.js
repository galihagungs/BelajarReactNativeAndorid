const { Component } = require("react");
const { Text, View } = require("react-native");

class FlexBox  extends Component{
    render(){
        return (
            <View style={{ flexDirection: 'row', backgroundColor:'#C8D6E5', alignItems:'center',justifyContent:"space-between"}}>
                <View style ={{ backgroundColor:'#EE5253', width:50, height:50 }}></View>
                <View style ={{ backgroundColor:'#FECA57', width:50, height:50 }}></View>
                <View style ={{ backgroundColor:'#1DD1A1', width:50, height:50 }}></View>
                <View style ={{ backgroundColor:'#5F27CD', width:50, height:50 }}></View>
            </View>
        );
    }
}

export default FlexBox;