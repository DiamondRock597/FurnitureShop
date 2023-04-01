import { Dimensions, ScaledSize, StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';

const { width }: ScaledSize = Dimensions.get('window');

const WIDTH_RATIO = 0.9;

export const style = StyleSheet.create({
  container: {
    width: width * WIDTH_RATIO,
    height: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: Colors.Primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  button: {
    width: '90%',
    paddingVertical: 30,
  },
  question: {
    fontFamily: Fonts.NunitoSemiBold,
    color: Colors.SecondaryGrey,
    lineHeight: 19,
    textAlign: 'center',
    fontSize: 14,
  },
  authType: {
    fontFamily: Fonts.NunitoBold,
    color: Colors.SecondaryBlack,
    lineHeight: 19,
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  navigationButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});
