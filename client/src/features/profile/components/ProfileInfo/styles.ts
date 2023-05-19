import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    borderRadius: 40,
  },
  contentContainer: {
    width: '65%',
  },
  name: {
    fontFamily: Fonts.NunitoBold,
    fontSize: 20,
    lineHeight: 27,
    color: Colors.SecondaryBlack,
  },
  email: {
    fontFamily: Fonts.NunitoRegular,
    color: Colors.SecondaryGrey,
    fontSize: 14,
    lineHeight: 18,
  },
});
