/**
 * The container is a base Component for handling the keyboard events
 * and also helps to view same contents on all screen devices
 */
import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const Container = ({children, style}:{children:any,style?:ViewStyle}) => {
  const [isKeyBoardShown, setKeyboardStatus] = useState(false);

  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  return (
    <SafeAreaView style={[styles.safeAreaView, style]}>
      <TouchableWithoutFeedback
        disabled={!isKeyBoardShown}
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default Container;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});


