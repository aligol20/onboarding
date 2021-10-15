import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WHITE} from '../consts/colors';
import {IPostHeader} from '../types/LocalTypes';
import {
  full_width,
  small_scale,
  tiny_scale,
  very_large_scale,
} from '../utils/sizing';
import Avatar from './Avatar';
import CustomText from './Customtext';

const PostHeader = ({avatarSRC, username}: IPostHeader) => {
  return (
    <View style={styles.maintainer}>
      <Avatar avatarSRC={avatarSRC} />
      <CustomText style={styles.username}>{username}</CustomText>
    </View>
  );
};
export default PostHeader;

const styles = StyleSheet.create({
  maintainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: full_width,
    minHeight: very_large_scale,
    paddingHorizontal: small_scale,
    backgroundColor: WHITE,
  },
  username: {
    marginLeft: tiny_scale,
  },
});
