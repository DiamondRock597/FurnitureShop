import { Dimensions, ScaledSize, StyleSheet } from 'react-native';

import { Colors } from 'common/constants/colors';

const { width }: ScaledSize = Dimensions.get('window');

const WIDTH_RATIO = 0.9;

export const style = StyleSheet.create({
  container: {
    width: width * WIDTH_RATIO,
    height: '75%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: Colors.Primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  button: {
    width: '90%',
    height: '25%',
    justifyContent: 'space-between',
  },
});
