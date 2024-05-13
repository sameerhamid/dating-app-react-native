import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle,
  FlexAlignType,
} from 'react-native';
import React from 'react';
import stylesObj from './styles';

import Colors from '../../styles/colors';
import {scaleSize} from '../../utils/scaleSheetUtils';
import {isIOS} from '../../constants/platformInfo';
import Spacer from '../utility/spacer';

interface Props {
  title?: string;
  leftAccessories?: ImageSourcePropType;
  leftAccessoriesPress?: ((_event: GestureResponderEvent) => void) | undefined;
  rightAccessories?: ImageSourcePropType;
  rightAccessoriesPress?: ((_event: GestureResponderEvent) => void) | undefined;
  leftImg?: StyleProp<ImageStyle>;
  rightImg?: StyleProp<ImageStyle>;
  titleTxt?: StyleProp<TextStyle>;
  showSpaceFromTop?: boolean;
  containerStyle?: ViewStyle;
  headerTextAlignment?: FlexAlignType | undefined;
  marginHorizontal?: number;
}

const defaultProps: Props = {
  title: '',
  leftAccessories: undefined,
  leftAccessoriesPress: undefined,
  rightAccessories: undefined,
  rightAccessoriesPress: undefined,
  leftImg: undefined,
  rightImg: undefined,
  titleTxt: undefined,
  showSpaceFromTop: true,
  headerTextAlignment: undefined,
  marginHorizontal: undefined,
};
const CustomHeader = (props: typeof defaultProps): React.ReactElement => {
  // ** ** ** ** ** HOOKS ** ** ** ** **

  const {
    leftAccessories,
    leftAccessoriesPress,
    leftImg,
    rightAccessories,
    rightAccessoriesPress,
    rightImg,
    showSpaceFromTop,
    title,
    titleTxt,
    headerTextAlignment,
    marginHorizontal,
  } = props;
  const styles = stylesObj(Colors, headerTextAlignment, marginHorizontal);
  // ** ** ** ** RENDER FUNCTIONS ** ** ** **
  /**
   * left accessories view
   * @returns
   */
  const leftContainer = (): React.ReactNode => {
    if (leftAccessories || rightAccessories) {
      return (
        <View style={styles.leftContainer}>
          {leftAccessories ? (
            <TouchableOpacity
              style={styles.leftImgVw}
              onPress={leftAccessoriesPress}>
              <Image
                source={leftAccessories}
                style={[styles.leftImg, leftImg]}
              />
            </TouchableOpacity>
          ) : undefined}
        </View>
      );
    }
    return null;
  };

  /**
   * middle title view
   * @returns
   */
  const middleVw = (): React.ReactNode => (
    <View style={styles.middleContainer}>
      <Text style={[styles.titleTxt, titleTxt]}>{title ?? ''}</Text>
    </View>
  );

  /**
   * right accessories view
   * @returns
   */
  const rightContainer = (): React.ReactNode => {
    if (leftAccessories || rightAccessories) {
      return (
        <View style={styles.rightContainer}>
          {rightAccessories ? (
            <TouchableOpacity
              style={styles.rightImgVw}
              onPress={rightAccessoriesPress}>
              <Image
                source={rightAccessories}
                style={[styles.rightImg, rightImg]}
              />
            </TouchableOpacity>
          ) : undefined}
        </View>
      );
    }
    return null;
  };
  // ** ** ** ** RENDER RETURNS ** ** ** **
  return (
    <>
      {!isIOS && (showSpaceFromTop || defaultProps.showSpaceFromTop) && (
        <Spacer height={scaleSize(15)} />
      )}

      <View style={[styles.container, props?.containerStyle || {}]}>
        {/* left side container */}
        {leftContainer()}

        {/* middle container containing title text */}
        {middleVw()}

        {/* Right side container */}
        {rightContainer()}
      </View>
    </>
  );
};

export default CustomHeader;
