import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export const BackButton = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <TouchableOpacity hitSlop={styles.hitSlop} onPress={goBack}>
      <Image style={styles.backButton} source={require('@assets/images/arrow.png')} />
    </TouchableOpacity>
  );
};
