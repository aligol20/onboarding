import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import {AuthContext} from '../../navigations/AppNavigator';
import {verticalScale} from '../../utils/scale';
import snackBar from '../../utils/snackBar';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  // usage is for changing the current stack
  const auth = useContext<any>(AuthContext);

  /**
   * By  LoginScreen Mounted, the token should be removed to fetching the new one
   * and preventing user to see the other screens in the future without token
   */
  useEffect(() => {
    const checkToken = async () => {
      await AsyncStorage.removeItem('token');
    };
    checkToken();
  }, []);

  const onLogin = async () => {
    setIsFetching(true);
    try {
      // const loginResult = await loginRequest({username, password});
      // const {status, data} = loginResult || {};
      // checks status and access_token
      // if True, changes Stack to 'main'
      // if (status === 200 && data?.access_token) {
      //   await AsyncStorage.setItem('token', data?.access_token);
      //   snackBar({text: 'Hi, welcome!'});

      auth.main();
      // }
    } catch (err) {
      console.log(err, 'err');
      snackBar({text: 'failed,please try again'});
    }
    setIsFetching(false);
  };

  return (
    <Container>
      <View style={styles.main}>
        <View style={styles.space} />
        <TextInput
          style={styles.input}
          placeholder={'username'}
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
          onBlur={() => Keyboard.dismiss()}
        />
        <TextInput
          style={styles.input}
          placeholder={'password'}
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
          autoCapitalize="none"
          clearButtonMode={'always'}
        />

        <CustomButton
          onPress={onLogin}
          style={styles.loginButton}
          loading={isFetching}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </CustomButton>
      </View>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  space: {
    height: verticalScale(170),
    width: 4,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 7,
    padding: 13,
    marginTop: 5,
    width: '70%',
  },
  loginButton: {
    backgroundColor: 'purple',
    borderRadius: 7,
    color: 'white',
    padding: 13,
    marginTop: 5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
