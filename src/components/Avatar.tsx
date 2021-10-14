import React from 'react';
import {Image, ImageStyle} from 'react-native';
import {very_large_scale} from '../utils/sizing';

const Avatar = ({
  avatarSRC,
  style = {
    width: very_large_scale,
    height: very_large_scale,
    borderRadius: very_large_scale,
  },
}: {
  avatarSRC: string;
  style?: ImageStyle;
}) => {
  return <Image source={{uri: avatarSRC}} style={style} />;
};

export default Avatar;
