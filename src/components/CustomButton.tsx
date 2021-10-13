/**
 * The CustomButton is same with TouchableOpacity, but has some feature in the following of  DRY route
 */
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {verticalScale} from '../utils/scale';

const CustomButton = ({
  loading,
  children,
  onPress,
  style,
  ...props
}: {
  loading: boolean;
  children: any;
  onPress: () => void;
  style: ViewStyle;
}) => {
  return (
    <TouchableOpacity
      style={[style, styles.button]}
      onPress={onPress}
      {...props}>
      {loading ? <ActivityIndicator color={'white'} /> : children}
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {minHeight: verticalScale(43)},
});
