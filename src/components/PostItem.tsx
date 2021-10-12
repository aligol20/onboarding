import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { BLACK, GREY } from '../consts/colors';
import {Postitem} from '../types/Types';
import dateHelper from '../utils/dateHelper';
import { scale } from '../utils/scale';
import { extra_large_scale, full_width, medium_scale, small_scale } from '../utils/sizing';
import CustomText from './Customtext';
import CustomVideoPlayer from './CustomVideoPlayer';
import PostHeader from './PostHeader';
import PostItemToolbar from './PostItemToolbar';

const PostItem = (item: Postitem) => {

  const { mediaResponses,contentResponse,userIdentification, id,onPressItem} = item;

  const onPress = ()=>{
    console.log(item, '********');

    onPressItem(item)
  }
  return (

    <View style={styles.container}>
      <PostHeader 
      username={userIdentification.username}
      src={userIdentification.avatarUrl}/>
      <CustomVideoPlayer
      src={mediaResponses[0].originalUrl}
      
      />
      <PostItemToolbar/>
          <TouchableOpacity
          style={styles.body}
    onPress={onPress}>
      <CustomText style={styles.desc}>{contentResponse.description}</CustomText>
      <CustomText style={styles.date}>{dateHelper(contentResponse.creationDate)}</CustomText>
      </TouchableOpacity>

    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 7,
    margin:3,
    padding:3,
    borderRadius:5,
  },
  desc:{
      textAlign:"left",
      maxWidth:'97%',
      color:BLACK,
      fontSize:small_scale,
  },
  date:{
      textAlign:"left",
      maxWidth:'90%',
      color:GREY,
      fontSize:small_scale
  },
  body:{
    width:"100%"
  }
});
