import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';

const HIT_SLOP_SIZE = 20;

export const styles = StyleSheet.create({
  backButton: {
    width: 15,
    height: 15,
    tintColor: Colors.SecondaryBlack,
    transform: [{ rotate: '-180deg' }],
  },
  hitSlop: {
    top: HIT_SLOP_SIZE,
    bottom: HIT_SLOP_SIZE,
    left: HIT_SLOP_SIZE,
    right: HIT_SLOP_SIZE,
  },
});
