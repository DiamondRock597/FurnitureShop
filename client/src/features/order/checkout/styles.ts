import { StyleSheet } from 'react-native';

import { Fonts } from 'constants/fonts';
import { Colors } from 'constants/colors';

export const styles = StyleSheet.create({
  container: {
    // height: '70%',
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 25,
    fontFamily: Fonts.NunitoRegular,
    color: Colors.SecondaryGrey,
  },
  paymentContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: Colors.Primary,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: Colors.SecondaryGreyLight,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  paymentMethodContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    backgroundColor: Colors.Primary,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  paymentMethod: {
    fontSize: 7,
  },
  cardNumber: {
    fontSize: 14,
    paddingLeft: 15,
    fontFamily: Fonts.NunitoSemiBold,
    color: '#242424',
  },
  orderContainer: {
    borderRadius: 8,
    paddingHorizontal: 20,
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
    marginBottom: 25,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  price: {
    fontSize: 18,
    fontFamily: Fonts.NunitoSemiBold,
    lineHeight: 25,
    color: Colors.SecondaryBlackBold,
  },
  totalValue: {
    fontFamily: Fonts.NunitoBold,
  },
});
