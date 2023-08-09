import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontFamily: Fonts.GelasioBold,
    lineHeight: 38,
    letterSpacing: 2,
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.7,
    height: height * 0.3,
    marginVertical: 10,
  },
  image: {
    width: width * 0.5,
    height: height * 0.2,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Fonts.NunitoRegular,
    color: Colors.SecondaryGrey,
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.SecondaryBlack,
  },
  successContainer: {
    top: height * 0.55,
    zIndex: 100,
    position: 'absolute',
  },
});
