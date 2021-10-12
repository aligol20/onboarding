import React from 'react'
import { ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'
import { IconProps } from '../types/Types'
import { extra_large_scale, medium_scale } from '../utils/sizing'


const HeartIcon = ({style,onPress,size=extra_large_scale}:IconProps) =>{
    return(
        <Icon name={'heart'} style={style} onPress={onPress} size={size}/>
    )
}
export default HeartIcon