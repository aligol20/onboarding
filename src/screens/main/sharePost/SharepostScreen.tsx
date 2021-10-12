import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from '../../../components/Customtext';
import { BLACK, GREY } from '../../../consts/colors';
import { extra_large_scale, medium_scale } from '../../../utils/sizing';

const SharePostScreen = () => {


  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{'Share Tab'}</CustomText>
    </View>
  );
};

export default SharePostScreen;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', alignItems: 'center',justifyContent:"center"},
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
