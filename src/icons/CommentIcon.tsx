import React, { EventHandler } from 'react'
import { ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { IconProps } from '../types/Types'
import { extra_large_scale, large_scale, medium_scale } from '../utils/sizing'


const CommentIcon = ({style,onPress,size=extra_large_scale}:IconProps) =>{

    return(
        <Icon name={'md-chatbubble-outline'} style={style} onPress={onPress} size={size}/>
    )
}
export default CommentIcon