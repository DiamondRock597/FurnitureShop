import { Colors } from 'constants/colors';
import { StyleSheet, Dimensions } from 'react-native';

const BUTTON_SIZE = 52;
const MOVED_PERCENT = 0.05;

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: 40,
    backgroundColor: Colors.Primary,
    position: 'absolute',
    bottom: height * MOVED_PERCENT,
    right: width * MOVED_PERCENT,
    shadowColor: Colors.SecondaryGrey,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
