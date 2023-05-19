import { StyleSheet } from 'react-native';

import { Fonts } from 'constants/fonts';
import { Colors } from 'constants/colors';

export const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    paddingBottom: 15,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
  },
  controlTitle: {
    fontFamily: Fonts.NunitoRegular,
    fontSize: 18,
    lineHeight: 25,
    color: Colors.SecondaryBlackBold,
  },
});
