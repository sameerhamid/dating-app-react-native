import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import {BorderStyle, BorderType} from '../../constants/enums';
import {buttonStyles} from './buttonStyles';
import CustomImage from '../custonImage';
import {imageStyles} from '../custonImage/styles';
import {Images} from '../../constants/images';
import textStyles from '../customText/textStyles';
import Colors from '../../styles/colors';
import CustomText from '../customText';

interface Props {
  onPress?: ((_event: GestureResponderEvent) => void) | undefined;
  title?: string;
  btnStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  shouldDisable?: boolean;
  hideBackground?: boolean;
  borderType?: BorderType;
  textSize?: number;
  borderRadius?: number;
  leftImage?: ImageSourcePropType;
  rightImage?: ImageSourcePropType;
  buttonImageStyle?: ImageStyle;
  shouldPreventDisabledStyle?: boolean;
  rightImageTintColor?: string;
  leftImageTintColor?: string;
  isSkipButton?: boolean;
  isCompleteRadiusButton?: boolean;
  showIcon?: boolean;
  isBigText?: boolean;
  borderColor?: string;
}

const defaultProps: Props = {
  onPress: undefined,
  title: '',
  btnStyle: {},
  buttonTextStyle: {},
  shouldDisable: false,
  hideBackground: false,
  borderRadius: undefined,
  textSize: undefined,
  borderType: undefined,
  leftImage: undefined,
  rightImage: undefined,
  buttonImageStyle: {},
  shouldPreventDisabledStyle: false,
  rightImageTintColor: undefined,
  leftImageTintColor: undefined,
  isSkipButton: false,
  isCompleteRadiusButton: false,
  showIcon: false,
  isBigText: false,
  borderColor: undefined,
};

const CustomButtom = (props: typeof defaultProps): React.ReactElement => {
  const {
    onPress,
    title,
    btnStyle,
    buttonTextStyle,
    shouldDisable,
    hideBackground,
    borderRadius,
    textSize,
    borderType,
    leftImage,
    rightImage,
    buttonImageStyle,
    shouldPreventDisabledStyle,
    rightImageTintColor,
    leftImageTintColor,
    isSkipButton,
    isCompleteRadiusButton,
    showIcon,
    isBigText,
    borderColor,
  } = props;

  const textStyle = textStyles(Colors);
  const imageStyle = imageStyles(Colors);
  const buttonStyle = buttonStyles(
    Colors,
    isSkipButton,
    isCompleteRadiusButton,
  );

  const getBorderStyle = (): BorderStyle => {
    if (borderType === BorderType.DOTTED) {
      return BorderStyle.DOTTED;
    }
    if (borderType === BorderType.DASHED) {
      return BorderStyle.DASHED;
    }
    return BorderStyle.SOLID;
  };

  return (
    <TouchableOpacity
      disabled={shouldDisable}
      onPress={onPress}
      style={{
        ...buttonStyle.btnView,
        ...(hideBackground && {backgroundColor: Colors.grayBackground}),
        ...(!!borderType && {
          borderWidth: 1,
          borderStyle: getBorderStyle(),
        }),
        ...(!!borderColor && {
          borderWidth: 1,
          borderColor,
        }),
        ...(!!borderRadius && {
          borderWidth: 0,
          borderRadius,
        }),
        ...(shouldDisable && !shouldPreventDisabledStyle
          ? buttonStyle.disabledBtnView
          : {}),
        ...(btnStyle ?? {}),
      }}>
      {/* left image */}

      {leftImage && (
        <CustomImage
          source={leftImage}
          imageStyle={{...imageStyle.margin, ...buttonImageStyle}}
          tintColor={leftImageTintColor}
        />
      )}

      <View style={{flex: rightImage || (isSkipButton && showIcon) ? 1 : 0}} />

      {/* title of the button  */}

      <CustomText
        text={title}
        txtSize={textSize}
        txtStyle={{
          ...(isSkipButton
            ? {...textStyle.purple_Bold18}
            : {...textStyle?.white_Bold18}),
          ...(buttonTextStyle ?? {}),
          ...(shouldDisable && !shouldPreventDisabledStyle
            ? isBigText
              ? {...textStyle.white_Bold18}
              : {...textStyle.white_Sans12}
            : {}),
        }}
      />
      {/* riht image  */}

      {(rightImage || (isSkipButton && showIcon)) && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <CustomImage
            // tintColor={rightImageTintColor || theme?.colors.purpleButtonTheme}
            tintColor={rightImageTintColor || 'red'}
            source={rightImage || Images.RIGHT_ARROW}
            imageStyle={{...imageStyle.margin, ...buttonImageStyle}}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButtom;
