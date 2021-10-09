import {Platform} from 'react-native';
import Snackbar from 'react-native-snackbar';
import PropTypes from 'prop-types';

/**
 *
 * @param {String} text
 * @param {'success'|'warning'|'error'|'normal'} type
 */

 export enum SnackState {
  success= 'success' ,
  warning='warning',
  error='error',
  normal='normal'
}



const snackBar = async ({text, type=SnackState.normal , ...props}:{text:string, type? : SnackState}) => {
  const bg = {
    success: 'green',
    warning: 'yellow',
    error: 'red',
    normal: undefined,
  };

  /**
   * if a modal is shown, toast doesnt work correctly,
   * we should setTimeout for showing the toast after modal is closed
   */
  if (Platform.OS === 'android') {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  Snackbar.show({
    text: text,
    backgroundColor: bg[type],
    ...props,
  });
};


export default snackBar;
