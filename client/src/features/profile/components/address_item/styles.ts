import { StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  addressCard: {
    borderRadius: 8,
    paddingVertical: 15,
    backgroundColor: Colors.Primary,
    shadowColor: Colors.SecondaryGreyLight,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  header: {
    borderBottomColor: Colors.SecondaryGreyLight,
    borderBottomWidth: 0.3,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: Fonts.NunitoBold,
    fontSize: 18,
    lineHeight: 25,
    color: Colors.SecondaryBlackBold,
  },
  addressContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  address: {
    fontFamily: Fonts.NunitoRegular,
    fontSize: 14,
    lineHeight: 25,
    color: Colors.SecondaryGrey,
  },
});
