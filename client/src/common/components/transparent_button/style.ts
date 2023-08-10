import { StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
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
