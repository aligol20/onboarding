/**
 * The container is a base Component for handling the keyboard events
 * and also helps to view same contents on all screen devices
 */
import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {small_scale} from '../utils/sizing';
import CustomLoading from './CustomLoading';

const Container = ({
  children,
  style,
  isLoading,
}: {
  children: any;
  style?: ViewStyle;
  isLoading?: boolean;
}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView, style]}>
      {console.log(isLoading, 'isLoading')}
      {isLoading && <CustomLoading style={styles.indicator} />}

      {children}
    </SafeAreaView>
  );
};
export default Container;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  indicator: {margin: small_scale},
});
