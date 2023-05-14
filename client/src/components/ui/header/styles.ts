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
    width: '95%',
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: Colors.SecondaryBlack,
  },
});
