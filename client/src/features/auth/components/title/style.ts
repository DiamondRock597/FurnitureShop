import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';

export const style = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  greeting: {
    fontSize: 30,
    lineHeight: 45,
    color: Colors.SecondaryGrey,
    fontFamily: Fonts.GelasioRegular,
  },
  welcome: {
    textTransform: 'uppercase',
    fontFamily: Fonts.GelasioBold,
    fontSize: 24,
    lineHeight: 45,
    letterSpacing: 0.05,
    color: Colors.SecondaryBlack,
  },
});
