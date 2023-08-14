import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';

const { height } = Dimensions.get('window');

const heightRatio = 0.07;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * heightRatio,
    backgroundColor: 'transparent',
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 1,
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.NunitoRegular,
    color: Colors.SecondaryBlack,
    textAlign: 'center',
    lineHeight: 23,
  },
});
