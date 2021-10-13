import React from 'react';
import {StyleSheet, View} from 'react-native';
import BookmarkIcon from '../icons/BookmarkIcon';
import CommentIcon from '../icons/CommentIcon';
import HeartIcon from '../icons/HeartIcon';
import SendIcon from '../icons/SendIcon';
import {Postitem} from '../types/Types';
import {scale} from '../utils/scale';

const PostItemToolbar = ({item}: {item: Postitem}) => {
  const onLikePress = () => {
    console.log('like', item);
  };
  return (
    <View style={styles.maintainer}>
      <View style={styles.container}>
        <HeartIcon onPress={onLikePress} style={styles.iconStyle} />
        <SendIcon style={styles.iconStyle} />
        <CommentIcon
          style={styles.iconStyle}
          onPress={() => console.log('on Press comment')}
        />
      </View>
      <BookmarkIcon
        style={styles.iconStyle}
        onPress={() => console.log('on Press comment')}
      />
    </View>
  );
};
export default PostItemToolbar;
const styles = StyleSheet.create({
  maintainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginHorizontal: scale(5),
    marginVertical: scale(7),
  },
});
