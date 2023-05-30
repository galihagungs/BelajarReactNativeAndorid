const { Component } = require("react");
const { Image, Text, View } = require("react-native");

class FlexBox extends Component{
    constructor (props){
        super(props);
        console.log ('==> Constructor');
        this.state ={
            subscriber:200,
        };
    }
    componentDidMount(){
        console.log ('==> Component Did Mount');
        setTimeout(() =>{
            this.setState({
                subscriber:400,
            });
        }, 2000);
        
        
    }
    componentDidUpdate(){
        console.log ('==> Component Did Update');
    }
    componentWillUnmount(){
        console.log ('==> Component Will Unmount');
    }

    render(){
        console.log(' ==> Render');
        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor:'#C8D6E5', alignItems:'center',justifyContent:"space-between"}}>
                    <View style ={{ backgroundColor:'#EE5253', width:50, height:50 }}></View>
                    <View style ={{ backgroundColor:'#FECA57', width:50, height:50 }}></View>
                    <View style ={{ backgroundColor:'#1DD1A1', width:50, height:50 }}></View>
                    <View style ={{ backgroundColor:'#5F27CD', width:50, height:50 }}></View>
                    
                </View>
                <View style={{ flexDirection:"row", justifyContent:'space-around'}}>
                        <Text>Beranda</Text>
                        <Text>Video</Text>
                        <Text>Playlist</Text>
                        <Text>Komunitas</Text>
                        <Text>Channel</Text>
                        <Text>Tentang</Text>  
                </View>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                    <Image 
                        source={{ uri: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-19/35414925_2145787052303069_4402988532403011584_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=105&_nc_ohc=KvvYmW_Lfg4AX8LptRH&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBoPKYGs3QnL5HAj8eGD3koDAB-uuIGgFpE25OzgPU4hw&oe=64799572&_nc_sid=640168' }} 
                        style={{ width:100, height:100 , borderRadius: 50,marginTop:20 ,marginHorizontal:14}}
                    />
                    <View >
                        <Text style={{ fontWeight:'bold', fontSize:20 }}>Galih Agung Sukmawan</Text>
                        <Text>{this.state.subscriber} Ribu Subscriber</Text>
                    </View>
                </View>

            </View>
            
        );
    }
}

export default FlexBox;