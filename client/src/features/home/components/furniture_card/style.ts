import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    borderRadius: 10,
    width: 157,
    height: 200,
    backgroundColor: 'red',
  },
  name: {
    color: Colors.SecondaryGrey,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: Fonts.NunitoRegular,
  },
  price: {
    fontFamily: Fonts.NunitoBold,
    fontSize: 14,
    lineHeight: 19,
    color: Colors.SecondaryBlack,
  },
});
