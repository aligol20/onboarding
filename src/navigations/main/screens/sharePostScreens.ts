/**
 * The array of main stack defined here
 */

import { DARK_BLUE, WHITE } from '../../../consts/colors';
import SharePostScreen from '../../../screens/main/sharePost/SharepostScreen';

const commonOptions = {
  headerShown: true,
  headerTintColor:WHITE,
  headerStyle: {
    backgroundColor: DARK_BLUE,
  },
  headerShadowVisible: false,

};
const sharePostScreens = [

  {
    name: 'SharePost',
    component: SharePostScreen,
    options: {
      ...commonOptions,
      headerTitle: 'SharePost',
    },
  },
];
export default sharePostScreens
;
