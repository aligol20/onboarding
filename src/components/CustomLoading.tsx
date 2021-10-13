import React from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';
import {GREY} from '../consts/colors';

const CustomLoading = ({
  color = GREY,
  style,
  size = 'small',
}: {
  color?: string;
  style?: ViewStyle;
  size?: 'small' | 'large';
}) => {
  return <ActivityIndicator size={size} color={color} style={style} />;
};
export default CustomLoading;
