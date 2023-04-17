import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    backgroundColor: Colors.SecondaryBlackBold,
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.NunitoRegular,
    color: Colors.Primary,
    textAlign: 'center',
    lineHeight: 23,
  },
});