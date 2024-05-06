import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const isTablet = DeviceInfo.isTablet();
export const hasNotch = DeviceInfo.hasNotch();
export const UID = DeviceInfo.getUniqueId();
export const AndroidVersion = DeviceInfo.getSystemVersion();
