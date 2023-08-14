import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.SecondaryGreyLight,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    opacity: 0.8,
  },
  plusIcon: {
    tintColor: '#242424',
    width: 15,
    height: 15,
  },
  minusIcon: {
    tintColor: '#242424',
    width: 13,
    height: 2,
    marginVertical: 6,
  },
  value: {
    paddingHorizontal: 15,
    fontFamily: Fonts.NunitoSemiBold,
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
});
