import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomText from '../../../components/Customtext';
import {RouteProp} from '@react-navigation/native';
import {Postitem} from '../../../types/Types';
import {BLACK, GREY} from '../../../consts/colors';
import {extra_large_scale, large_scale, medium_scale} from '../../../utils/sizing';
import {scale} from '../../../utils/scale';

const PostDetailsScreen = (props: {
  route: {params: {item: Postitem}; key: string; name: string};
}) => {
  const {route} = props || {};
  const {params} = route || {};
  const {item} = params || {};
  const {contentResponse} = item || { }

  console.log(params, 'route ');

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{contentResponse.creationDate}</CustomText>
      <CustomText style={styles.body}>{contentResponse.description}</CustomText>
    </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', alignItems: 'flex-start'},
  title: {
    textAlign: 'left',
    maxWidth: '90%',
    color: BLACK,
    fontSize: extra_large_scale,
    marginBottom: extra_large_scale,
  },
  body: {
    textAlign: 'left',
    maxWidth: '90%',
    color: GREY,
    fontSize: medium_scale,
  },
});
