import { Colors } from 'common/constants/colors';
import { Fonts } from 'common/constants/fonts';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const ICON_HEIGHT = 20;
const ICON_WIDTH = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 10,
    backgroundColor: Colors.Primary,
    borderRadius: 6,
    position: 'absolute',
    top: height * 0.08,
    left: width * 0.07,
    zIndex: 100,
    shadowColor: Colors.SecondaryBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.84,
    elevation: 3,
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
    borderBottomLeftRadius: 50,
  },
  name: {
    fontSize: 24,
    fontFamily: Fonts.GelasioRegular,
    lineHeight: 30,
    color: Colors.SecondaryBlack,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 25,
  },
  amountContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 30,
    lineHeight: 41,
    fontFamily: Fonts.NunitoBold,
    color: Colors.SecondaryBlack,
  },
  description: {
    fontFamily: Fonts.NunitoLight,
    fontSize: 14,
    lineHeight: 19,
    color: Colors.SecondaryGrey,
  },
  buttonContainer: {
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  favouriteIcon: {
    width: ICON_WIDTH,
    height: ICON_HEIGHT,
  },
  favouriteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 8,
    opacity: 0.8,
    backgroundColor: Colors.SecondaryGreyLight,
  },
  addingButton: {
    // width: '80%',
  },
});
