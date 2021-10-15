import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {IIcon} from '../types/LocalTypes';
import {extra_large_scale} from '../utils/sizing';

const CommentIcon = ({style, onPress, size = extra_large_scale}: IIcon) => {
  return (
    <Icon
      name={'md-chatbubble-outline'}
      style={style}
      onPress={onPress}
      size={size}
    />
  );
};
export default CommentIcon;
