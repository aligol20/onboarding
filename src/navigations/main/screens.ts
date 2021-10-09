/**
 * The array of main stack defined here
 */

import { DARK_BLUE, WHITE } from '../../consts/colors';
import HomeScreen from '../../screens/HomeScreen';
import PostDetailsScreen from '../../screens/PostDetailsScreen';

const commonOptions = {
  headerShown: true,
  headerTintColor:WHITE,
  headerStyle: {
    backgroundColor: DARK_BLUE,
  },
};
const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      ...commonOptions,
      headerShadowVisible: false,
      headerTitle: 'Home',
     
    },
  },
  {
    name: 'PostDetails',
    component: PostDetailsScreen,
    options: {
      ...commonOptions,
      headerTitle: 'PostDetails',
      headerShadowVisible: false,
      
     
     
    },
  },
];
export default screens;
