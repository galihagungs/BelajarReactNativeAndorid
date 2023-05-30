import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Story = (props) =>{
    return (
        <View style ={{ alignItems:'center', marginRight:20 }}>
            <Image 
                source={{ uri: props.image }}
                style={{ width:50, height:50, borderRadius:50/2 }}
            />
            <Text style={{ maxWidth:50, textAlign:'center' }}>{props.title}</Text>
        </View>
    );
}

const PropsDinamis = () => {
  return (
    <View>
      <Text>PropsDinamis</Text>
      <ScrollView horizontal>
        <View style = {{ flexDirection:'row' }}>
            <Story title = "Background Windows Pink" image ="https://c4.wallpaperflare.com/wallpaper/574/830/351/windows-10-purple-background-purple-pink-logo-hd-wallpaper-preview.jpg" />
            <Story title = "Background Windows Biru" image ="https://c4.wallpaperflare.com/wallpaper/882/404/955/microsoft-windows-windows-10-wallpaper-preview.jpg"/>
            <Story title = "Background Windows Hijau" image ="https://virtualbackgrounds.site/wp-content/uploads/2020/07/windows-xp-wallpaper-bliss.jpg" />
            <Story title = "Background Windows Hijau" image ="https://virtualbackgrounds.site/wp-content/uploads/2020/07/windows-xp-wallpaper-bliss.jpg" />
            <Story title = "Background Windows Hijau" image ="https://virtualbackgrounds.site/wp-content/uploads/2020/07/windows-xp-wallpaper-bliss.jpg" />
            <Story title = "Background Windows Hijau" image ="https://virtualbackgrounds.site/wp-content/uploads/2020/07/windows-xp-wallpaper-bliss.jpg" />
            <Story title = "Background Windows Hijau" image ="https://virtualbackgrounds.site/wp-content/uploads/2020/07/windows-xp-wallpaper-bliss.jpg" />
        </View>
      </ScrollView>
      
      
    </View>
  )
}

export default PropsDinamis

const styles = StyleSheet.create({

})