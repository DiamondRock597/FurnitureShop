import { StyleSheet, Dimensions } from 'react-native';

import { Fonts } from 'common/constants/fonts';
import { Colors } from 'common/constants/colors';

const { width, height } = Dimensions.get('screen');
const PLUS_ICON_SIZE = 15;

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    marginVertical: 6,
  },
  image: {
    width: width * 0.3,
    height: height * 0.12,
    borderRadius: 20,
  },
  controllerContainer: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.NunitoRegular,
    color: Colors.SecondaryGrey,
    lineHeight: 19,
  },
  price: {
    fontSize: 16,
    fontFamily: Fonts.NunitoBold,
    lineHeight: 22,
    color: Colors.SecondaryBlackBold,
  },
  circleContainer: {
    width: '30%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  circle: {
    borderRadius: 10,
    borderColor: Colors.SecondaryBlackBold,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: PLUS_ICON_SIZE,
    height: PLUS_ICON_SIZE,
    transform: [{ rotate: '45deg' }],
  },
});
