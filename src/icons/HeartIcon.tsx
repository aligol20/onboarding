import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import {IIcon} from '../types/LocalTypes';
import {extra_large_scale} from '../utils/sizing';

const HeartIcon = ({style, onPress, size = extra_large_scale}: IIcon) => {
  return <Icon name={'heart'} style={style} onPress={onPress} size={size} />;
};
export default HeartIcon;
