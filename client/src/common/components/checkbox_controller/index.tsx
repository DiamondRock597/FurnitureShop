import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Colors } from 'common/constants/colors';

import { styles } from './styles';

interface Props {
  isActive: boolean;
  title: string;
  onChange: (value: boolean) => void;
}

export const CheckboxController: React.FC<Props> = ({ isActive, title, onChange }) => (
  <View style={styles.controlContainer}>
    <CheckBox
      onValueChange={onChange}
      value={isActive}
      style={styles.checkboxContainer}
      onCheckColor={Colors.Primary}
      onTintColor={Colors.SecondaryBlack}
      onFillColor={Colors.SecondaryBlack}
      boxType="square"
      tintColor={Colors.SecondaryBlack}
      onAnimationType="one-stroke"
      animationDuration={0.1}
      tintColors={{ true: Colors.SecondaryBlack, false: Colors.SecondaryBlack }}
    />
    <Text style={styles.controlTitle}>Use as the {title}</Text>
  </View>
);
