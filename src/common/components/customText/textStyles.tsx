import {StyleSheet, TextStyle} from 'react-native';
import {scaleFontSize} from '../../utils/scaleSheetUtils';

import {Colors} from '../../model/theme/themeModel';

export type TextStyles = {
  black16: TextStyle;
};
const textStyles = (colors?: Colors): TextStyles =>
  StyleSheet.create<TextStyles>({
    black16: {
      color: colors?.text,
      fontSize: scaleFontSize(16),
    },
  });

export default textStyles;
