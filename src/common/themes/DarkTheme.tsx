import {ThemeModelItem} from '../model/theme/themeModel';
import Colors from '../styles/colors';

export const DarkTheme: ThemeModelItem = {
  dark: true,
  colors: {
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.card,
    text: Colors.text,
    border: Colors.border,
    notification: Colors.notification,
  },
};
