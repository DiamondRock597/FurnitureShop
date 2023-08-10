import { StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
    height: '80%',
    width: '100%',
    backgroundColor: Colors.SecondaryBlackBold,
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    marginVertical: 10,
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
