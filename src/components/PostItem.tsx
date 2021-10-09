import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Postitem} from '../types/Types';
import CustomText from './Customtext';

const PostItem = (item: Postitem) => {
  console.log(item, '********');

  const {title, body, id} = item;
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
      <CustomText>{body}</CustomText>
    </View>
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
      color:"red"
  }
});
