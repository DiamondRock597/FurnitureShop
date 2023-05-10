import React from 'react';
import CheckBox from '@react-native-community/checkbox';

import { Colors } from 'constants/colors';
import { StyleSheet } from 'react-native';

export const Checkbox = () => (
  <CheckBox
    style={styles.container}
    onCheckColor={Colors.Primary}
    hideBox
    boxType="square"
    tintColor={Colors.SecondaryBlack}
    onAnimationType="one-stroke"
    animationDuration={0.1}
    tintColors={{ true: Colors.SecondaryBlack, false: Colors.SecondaryBlack }}
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SecondaryBlack,
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
});
