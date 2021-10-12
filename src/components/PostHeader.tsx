import React from 'react'
import {StyleSheet, View} from 'react-native'
import { PostHeaderProps } from '../types/Types'
import { extra_large_scale, full_width, small_scale, tiny_scale, very_large_scale } from '../utils/sizing'
import Avatar from './Avatar'
import CustomText from './Customtext'




const PostHeader = ({src,username}:PostHeaderProps) =>{


    return(
        <View style={styles.maintainer}>
            <Avatar src={src}/>
            <CustomText style={styles.username}>{username}</CustomText>


        </View>

    )
}
export default PostHeader

const styles = StyleSheet.create({
    maintainer:{
        flexDirection:'row',
        alignItems:"center",
        width:full_width,
        minHeight:very_large_scale,
        paddingHorizontal:small_scale
    },
    username:{
        marginLeft:tiny_scale
    }
})


