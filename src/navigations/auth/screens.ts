/**
 * The array of auth stack defined here
 */
import LoginScreen from '../../screens/auth/LoginScreen';

const commonOptions = {
  headerShown: false,
};
const screens = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {...commonOptions},
  },
];
export default screens;
