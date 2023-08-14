import { StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: Colors.Primary,
    marginVertical: 8,
  },
  title: {
    fontFamily: Fonts.NunitoRegular,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.SecondaryGrey,
  },
  text: {
    fontFamily: Fonts.NunitoSemiBold,
    color: '#242424',
    fontSize: 16,
    lineHeight: 22,
  },
});
