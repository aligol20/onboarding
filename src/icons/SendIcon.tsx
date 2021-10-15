import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IIcon} from '../types/LocalTypes';
import {extra_large_scale} from '../utils/sizing';

const SendIcon = ({style, onPress, size = extra_large_scale}: IIcon) => {
  return (
    <Ionicons name={'md-send'} style={style} onPress={onPress} size={size} />
  );
};
export default SendIcon;
