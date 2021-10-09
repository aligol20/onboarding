/**
 * The main core for routing is here.
 */
 import {NavigationContainer} from '@react-navigation/native';
 import React from 'react';
 import {SafeAreaProvider} from 'react-native-safe-area-context';
 import MainStack from '../navigations/main/MainStack';
 import StoreProvider from '../redux/StoreProvider';
 
 export default function AppNavigator() {
   const StackManager = () => {
     return <MainStack />;
   };
 
   return (
     <StoreProvider>
       <SafeAreaProvider>
         <NavigationContainer>{StackManager()}</NavigationContainer>
       </SafeAreaProvider>
     </StoreProvider>
   );
 }
 