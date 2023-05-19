import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';

export const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#242424',
    borderRadius: 7,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  cardNumber: {
    color: Colors.Primary,
    fontSize: 20,
    fontFamily: Fonts.NunitoSemiBold,
    lineHeight: 27,
    paddingVertical: 20,
    letterSpacing: 2,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoTitle: {
    fontSize: 13,
    lineHeight: 20,
    color: Colors.Primary,
    fontFamily: Fonts.NunitoRegular,
  },
  information: {
    color: Colors.Primary,
    fontSize: 15,
    fontFamily: Fonts.NunitoSemiBold,
    lineHeight: 25,
    letterSpacing: -0.3,
  },
});
