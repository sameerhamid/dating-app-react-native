import {StyleSheet, TextStyle} from 'react-native';
import {scaleFontSize} from '../../utils/scaleSheetUtils';

import {Colors} from '../../model/theme/themeModel';

export type TextStyleTypes = {
  black16: TextStyle;
  white14: TextStyle;
};
const textStyles = (colors?: Colors): TextStyleTypes =>
  StyleSheet.create<TextStyleTypes>({
    black16: {
      color: colors?.text,
      fontSize: scaleFontSize(16),
    },
    white14: {
      color: colors?.white,
      fontSize: scaleFontSize(14),
    },
  });

export default textStyles;
