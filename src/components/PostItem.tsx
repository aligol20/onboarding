import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { BLACK, GREY } from '../consts/colors';
import {Postitem} from '../types/Types';
import { scale } from '../utils/scale';
import { medium_scale, small_scale } from '../utils/sizing';
import CustomText from './Customtext';

const PostItem = (item: Postitem) => {

  const {title, body, id,onPressItem} = item;

  const onPress = ()=>{
    console.log(item, '********');

    onPressItem(item)
  }
  return (
    <TouchableOpacity
    onPress={onPress}>
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
      <CustomText style={styles.body}>{body}</CustomText>
    </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 7,
    backgroundColor:"white",
    margin:3,
    padding:3,
    borderRadius:5
  },
  title:{
      textAlign:"left",
      maxWidth:'90%',
      color:BLACK,
      fontSize:medium_scale,
  },
  body:{
      textAlign:"left",
      maxWidth:'90%',
      color:GREY,
      fontSize:small_scale
  }
});
