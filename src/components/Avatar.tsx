import React from 'react';
import {Image, ImageStyle, View, ViewStyle} from 'react-native';
import {extra_large_scale, large_scale, very_large_scale} from '../utils/sizing';

const Avatar = ({
  src,
  style = {width: very_large_scale, height: very_large_scale, borderRadius: very_large_scale},
}: {
  src: string;
  style?: ImageStyle;
}) => {
  return <Image source={{uri: src}} style={style} />;
};

export default Avatar;
