import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 20,
  },
  totalTitle: {
    fontSize: 20,
    fontFamily: Fonts.NunitoBold,
    lineHeight: 27,
    color: Colors.SecondaryGrey,
  },
  totalValue: {
    fontFamily: Fonts.NunitoBold,
    fontSize: 20,
    lineHeight: 27,
    color: Colors.SecondaryBlack,
  },
});
