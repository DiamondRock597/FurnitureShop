import { Fonts } from 'constants/fonts';
import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';

export const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: Fonts.NunitoRegular,
    color: Colors.SecondaryGrey,
  },
  container: {
    width: '100%',
    marginVertical: 15,
  },
  input: {
    paddingVertical: 10,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: Fonts.NunitoRegular,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E0E0E0',
  },
  error: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: Fonts.NunitoLight,
    color: 'red',
  },
  inputContainer: {
    paddingBottom: 2,
  },
});
