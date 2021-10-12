/**
 * The main core for routing is here.
 */
 import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
 import React, { useEffect, useMemo, useReducer } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
 import {SafeAreaProvider} from 'react-native-safe-area-context';
import { DARK_BLUE } from '../consts/colors';
 import MainStack from '../navigations/main/MainStack';
 import StoreProvider from '../redux/StoreProvider';
import SignInStack from './auth/SignInStack';
import MainStartupTabs from './main/MainStartupTabs';
 
 const initialState = {authState: ''};

 export const AuthContext = React.createContext({});

export const navigationRef = React.createRef();

 export default function AppNavigator() {
 // first time app launched,checks user auth state.
 useEffect(() => {
  checkAuthentication();
}, []);




// a reducer for keeping the current auth state
const reducer = (state:any, action:any) => {
  switch (action.type) {
    case 'MAIN':
      return {authState: 'main'};
    case 'SIGN_IN':
      return {authState: 'signin'};
  }
  return {authState: 'signin'};
};
// reducer definition
const [state, dispatch] = useReducer(reducer, initialState);

/**
 * with useMemo and passing this function to all components with help of useContext,
 * We can change the stack immediately
 */
const authContext = useMemo(
  () => ({
    signIn: () => dispatch({type: 'SIGN_IN'}),
    main: () => dispatch({type: 'MAIN'}),
  }),
  [],
);
/**
 * By checking 'token' from AsyncStorage,
 * we can detect whether the user is logged in before or not.
 */
const checkAuthentication = async () => {
  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({type: 'MAIN'});
    } else {
      dispatch({type: 'SIGN_IN'});
    }
  } catch (e) {
    console.log(e, 'error');
    // error reading value
    dispatch({type: 'SIGN_IN'});
  }
};

/**
 * By changing the authState, Stack will be changed immediately
 * @returns current Stack
 */
const StackManager = () => {
  switch (state?.authState) {
    case 'signin':
      return <SignInStack />;
    case 'main':
      return <MainStartupTabs />;

    default:
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator color={'grey'} />
        </View>
      );
  }
};
 
   return (
    <AuthContext.Provider value={authContext}>

     <StoreProvider>
       <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE}/>
       <SafeAreaProvider>
         <NavigationContainer>{StackManager()}</NavigationContainer>
       </SafeAreaProvider>
     </StoreProvider>
     </AuthContext.Provider>
   );
 }
 