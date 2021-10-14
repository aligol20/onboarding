import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../../../components/Customtext';
import {BLACK, GREY} from '../../../consts/colors';
import {PostTypes} from '../../../types/Types';
import {extra_large_scale, medium_scale} from '../../../utils/sizing';

const PostDetailsScreen = (props: {
  route: {params: {item: PostTypes}; key: string; name: string};
}) => {
  const {route} = props || {};
  const {params} = route || {};
  const {item} = params || {};
  const {contentResponse} = item || {};

  console.log(params, 'route ');

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>
        {contentResponse.creationDate}
      </CustomText>
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
