/**
 * The main core for routing is here.
 */
 import {NavigationContainer} from '@react-navigation/native';
 import React from 'react';
import { StatusBar } from 'react-native';
 import {SafeAreaProvider} from 'react-native-safe-area-context';
import { DARK_BLUE } from '../consts/colors';
 import MainStack from '../navigations/main/MainStack';
 import StoreProvider from '../redux/StoreProvider';
 
 export default function AppNavigator() {
   const StackManager = () => {
     return <MainStack />;
   };
 
   return (
     <StoreProvider>
       <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE}/>
       <SafeAreaProvider>
         <NavigationContainer>{StackManager()}</NavigationContainer>
       </SafeAreaProvider>
     </StoreProvider>
   );
 }
 