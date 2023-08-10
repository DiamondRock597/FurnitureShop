import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';

const { height } = Dimensions.get('window');

export const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  firstTitle: {
    fontFamily: Fonts.GelasioSemiBold,
    fontSize: 24,
    lineHeight: 30,
    color: Colors.SecondaryGrey,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  secondTitle: {
    fontFamily: Fonts.GelasioBold,
    fontSize: 30,
    lineHeight: 38,
    color: Colors.SecondaryBlack,
    textTransform: 'uppercase',
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'space-around',
    paddingBottom: 35,
  },
  descriptionContainer: {
    flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontFamily: Fonts.NunitoLight,
    color: Colors.SecondaryGrey,
    fontSize: 18,
    lineHeight: 35,
    textAlign: 'justify',
    width: '85%',
  },
  buttonContainer: {
    width: '45%',
    height: '30%',
  },
});
