/**
 * The array of main stack defined here
 */

import HomeScreen from '../../screens/HomeScreen';
import PostDetailsScreen from '../../screens/PostDetailsScreen';

const commonOptions = {
  headerShown: true,
};
const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      ...commonOptions,
      headerShadowVisible: false,
      headerTitle: 'Home',
      headerStyle: {
        backgroundColor: 'rgb(56,87,117)',
      },
      headerTitleStyle: {
        color: 'white',
      },
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
