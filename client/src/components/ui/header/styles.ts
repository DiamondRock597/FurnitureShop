import { Dimensions, StyleSheet } from 'react-native';

import { Fonts } from 'constants/fonts';
import { Colors } from 'constants/colors';

const ICON_SIZE = 20;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.Primary,
  },
  title: {
    fontFamily: Fonts.GelasioSemiBold,
    fontSize: 18,
    lineHeight: 25,
    color: Colors.SecondaryBlack,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: Colors.SecondaryBlack,
  },
  backButton: {
    width: 15,
    height: 15,
    tintColor: Colors.SecondaryBlack,
    transform: [{ rotate: '-180deg' }],
  },
  hitSlop: {
    top: ICON_SIZE,
    bottom: ICON_SIZE,
    left: ICON_SIZE,
    right: ICON_SIZE,
  },
});
