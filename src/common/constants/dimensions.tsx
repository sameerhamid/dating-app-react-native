import {Dimensions} from 'react-native';
import {isIOS, isTablet} from './platformInfo';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const keyboardHeight = isIOS ? (isTablet ? 60 : 30) : 0;
