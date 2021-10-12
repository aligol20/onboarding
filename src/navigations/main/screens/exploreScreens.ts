/**
 * The array of main stack defined here
 */

import { DARK_BLUE, WHITE } from '../../../consts/colors';
import ExploreScreen from '../../../screens/main/explore/ExploreScreen';
import FavoriteScreen from '../../../screens/main/favorite/FavoriteScreen';
import HomeScreen from '../../../screens/main/home/HomeScreen';
import PostDetailsScreen from '../../../screens/main/home/PostDetailsScreen';
import ProfileScreen from '../../../screens/main/profile/ProfileScreen';
import SharePostScreen from '../../../screens/main/sharePost/SharepostScreen';
import ShareScreen from '../../../screens/main/sharePost/SharepostScreen';

const commonOptions = {
  headerShown: false,
  headerTintColor:WHITE,
  headerStyle: {
    backgroundColor: DARK_BLUE,
  },
  headerShadowVisible: false,

};
const exploreScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      ...commonOptions,
      headerTitle: 'Home',
      headerShown: true,

    },
  },
  {
    name: 'PostDetails',
    component: PostDetailsScreen,
    options: {
      ...commonOptions,
      headerTitle: 'PostDetails',
      headerShown: true,

    },
  },
  {
    name: 'Explore',
    component: ExploreScreen,
    options: {
      ...commonOptions,
      headerTitle: 'Explore',
      headerShown: false,

    },
  },
  {
    name: 'Favorite',
    component: FavoriteScreen,
    options: {
      ...commonOptions,
      headerTitle: 'Favorite',
      headerShown: true,

    },
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      ...commonOptions,
      headerTitle: 'Profile',
      headerShown: true,

    },
  },
  {
    name: 'SharePost',
    component: SharePostScreen,
    options: {
      ...commonOptions,
      headerTitle: 'SharePost',
      headerShown: true,

    },
  },
];
export default exploreScreens;
