import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  image: {
    borderRadius: 20,
    width: width * 0.4,
    height: height * 0.25,
  },
  name: {
    paddingVertical: 3,
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
