import {Dimensions} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
const {height: Height} = Dimensions.get('screen');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 720;

export const scale = (size:number) => (deviceWidth / guidelineBaseWidth) * size;
export const verticalScale = (size:number) => (Height / guidelineBaseHeight) * size;
