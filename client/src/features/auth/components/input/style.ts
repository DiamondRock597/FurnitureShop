import { Fonts } from 'common/constants/fonts';
import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';

const { height } = Dimensions.get('window');

const HEIGHT_RATIO = 0.06;

export const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: Fonts.NunitoRegular,
    color: Colors.SecondaryGrey,
  },
  input: {
    flex: 1,
    height: '85%',
    width: '100%',
    paddingVertical: 10,
    fontSize: 14,
    lineHeight: 15,
    fontFamily: Fonts.NunitoRegular,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E0E0E0',
  },
  error: {
    fontSize: 12,
    textAlign: 'right',
    fontFamily: Fonts.NunitoLight,
    color: 'red',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: height * HEIGHT_RATIO,
  },
});
