import { StyleSheet } from 'react-native';

import { Fonts } from 'common/constants/fonts';
import { Colors } from 'common/constants/colors';

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
});
