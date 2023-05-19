import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';

const ICON_SIZE = 12;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.Primary,
    shadowColor: Colors.SecondaryGreyLight,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    fontFamily: Fonts.NunitoSemiBold,
    fontSize: 18,
    lineHeight: 25,
    color: '#242424',
  },
  subtitle: {
    fontFamily: Fonts.NunitoRegular,
    fontSize: 12,
    lineHeight: 15,
    color: Colors.SecondaryGrey,
  },
  image: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: '#242424',
  },
  scrollContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
