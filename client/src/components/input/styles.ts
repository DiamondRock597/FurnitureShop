import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    borderRadius: 4,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 16,
    backgroundColor: Colors.Primary,
    marginVertical: 4,
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
