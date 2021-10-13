import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import {DARK_BLUE, GREY} from '../../consts/colors';
import {medium_scale} from '../../utils/sizing';
import exploreScreens from './screens/exploreScreens';
import favoriteScreens from './screens/favoriteScreens';
import homeScreens from './screens/homeScreens';
import profileScreens from './screens/profileScreens';
import sharePostScreens from './screens/sharePostScreens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
let bottomHeight = null;

const HomeStack = () => {
  bottomHeight = useBottomTabBarHeight();
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      {homeScreens.map(x => (
        <Stack.Screen
          key={x.name}
          options={x.options}
          name={x.name}
          component={x.component}
        />
      ))}
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Explore'}>
      {exploreScreens.map(x => (
        <Stack.Screen
          key={x.name}
          options={x.options}
          name={x.name}
          component={x.component}
        />
      ))}
    </Stack.Navigator>
  );
};

const SharePostStack = () => {
  return (
    <Stack.Navigator initialRouteName={'SharePost'}>
      {sharePostScreens.map(x => (
        <Stack.Screen
          key={x.name}
          options={x.options}
          name={x.name}
          component={x.component}
        />
      ))}
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Favorite'}>
      {favoriteScreens.map(x => (
        <Stack.Screen
          key={x.name}
          options={x.options}
          name={x.name}
          component={x.component}
        />
      ))}
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Profile'}>
      {profileScreens.map(x => (
        <Stack.Screen
          key={x.name}
          options={x.options}
          name={x.name}
          component={x.component}
        />
      ))}
    </Stack.Navigator>
  );
};

const MainStartupTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: DARK_BLUE,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          switch (route.name) {
            case 'HomeTab':
              iconName = 'home';
              break;
            case 'SearchTab':
              iconName = 'magnifying-glass';
              break;
            case 'SharePostTab':
              iconName = 'plus';
              break;
            case 'FavoriteTab':
              iconName = 'heart';
              break;
            case 'ProfileTab':
              iconName = 'torso';
              break;
          }
          return (
            <Foundation
              name={iconName}
              size={medium_scale}
              color={focused ? DARK_BLUE : GREY}
            />
          );
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="SearchTab" component={ExploreStack} />
      <Tab.Screen name="SharePostTab" component={SharePostStack} />
      <Tab.Screen name="FavoriteTab" component={FavoriteStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MainStartupTabs;
