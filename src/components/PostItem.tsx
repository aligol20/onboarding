import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BLACK, GREY} from '../consts/colors';
import {PostTypes} from '../types/Types';
import dateHelper from '../utils/dateHelper';
import {semi_small_scale, small_scale, tiny_scale} from '../utils/sizing';
import CustomText from './Customtext';
import CustomVideoPlayer from './CustomVideoPlayer';
import PostHeader from './PostHeader';
import PostItemToolbar from './PostItemToolbar';

const PostItem = (item: PostTypes) => {
  const {mediaResponses, contentResponse, userIdentification, id} = item;

  return (
    <View style={styles.container}>
      <PostHeader
        username={userIdentification.username}
        avatarSRC={userIdentification.avatarUrl}
      />
      <CustomVideoPlayer src={mediaResponses[0].originalUrl} />
      <PostItemToolbar item={item} />
      <View style={styles.body}>
        <CustomText style={styles.desc}>
          {contentResponse.description}
        </CustomText>
        <CustomText style={styles.date}>
          {dateHelper(contentResponse.creationDate)}
        </CustomText>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 7,
    margin: 3,
    padding: 3,
    borderRadius: 5,
  },
  desc: {
    textAlign: 'left',
    maxWidth: '97%',
    color: BLACK,
    fontSize: small_scale,
  },
  date: {
    textAlign: 'left',
    maxWidth: '90%',
    marginTop: tiny_scale,
    color: GREY,
    fontSize: semi_small_scale,
  },
  body: {
    width: '100%',
  },
});
