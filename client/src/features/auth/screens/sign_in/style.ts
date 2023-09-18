import { Dimensions, ScaledSize, StyleSheet } from 'react-native';

const { width }: ScaledSize = Dimensions.get('window');

const WIDTH_RATIO = 0.9;

export const style = StyleSheet.create({
  container: {
    width: width * WIDTH_RATIO,
    height: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  button: {
    width: '90%',
    height: '25%',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
