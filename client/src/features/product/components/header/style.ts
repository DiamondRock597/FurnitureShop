import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';

const ICON_SIZE = 24;

export const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.GelasioRegular,
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: Colors.SecondaryBlack,
  },
  subTitle: {
    fontFamily: Fonts.GelasioBold,
    fontSize: 22,
    lineHeight: 25,
    textAlign: 'center',
    color: Colors.SecondaryBlack,
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: Colors.SecondaryBlack,
  },
});
