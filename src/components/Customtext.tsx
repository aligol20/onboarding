import React from 'react';
import {Text, ViewProps, ViewStyle} from 'react-native';

const CustomText = ({children, style,...props}: {children: any,style?:ViewStyle}) => {
  return <Text {...props} style={style}>{children}</Text>;
};

export default CustomText;
