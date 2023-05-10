import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: Colors.Primary,
  },
  title: {
    fontFamily: Fonts.NunitoRegular,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.SecondaryGrey,
    paddingBottom: 8,
  },
  text: {
    fontFamily: Fonts.NunitoSemiBold,
    color: '#242424',
    fontSize: 16,
    lineHeight: 22,
  },
});
