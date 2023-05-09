import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';

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
    color: '#909090',
  },
  subTitle: {
    fontFamily: Fonts.GelasioBold,
    fontSize: 22,
    lineHeight: 25,
    textAlign: 'center',
    color: Colors.SecondaryBlack,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#909090',
  },
});
