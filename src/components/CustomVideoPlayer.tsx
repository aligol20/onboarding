import React from 'react'
import {View, ViewStyle } from 'react-native'
import WebView from 'react-native-webview'
import { full_width } from '../utils/sizing'


const CustomVideoPlayer = (
    {src,style}:{src:string,style?:ViewStyle})=>{

console.log(src,'src %%%%%%')
return(
    <View style={{backgroundColor:"red",flex:1,alignItems:"center"}}>
    <WebView
    allowsInlineMediaPlayback={true}
    style={{minWidth:full_width,minHeight:320,alignSelf:"center"}}
    scrollEnabled={false}
    source={{
        html: `
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <video
        playsInline
        width="100%" height="100%" style="background-color:black" controls>
            <source src="${src}" type="video/mp4">
        </video>
        </meta>
        `,
    }}
/>
</View>
)

}
export default CustomVideoPlayer