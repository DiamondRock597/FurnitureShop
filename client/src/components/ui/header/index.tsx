import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface Props {
  isProfile?: boolean;
  isBackButtonVisible?: boolean;
  isBasketVisible?: boolean;
  name: string;
}

export const Header: React.FC<Props> = ({ isProfile, name, isBackButtonVisible, isBasketVisible }) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      {isBackButtonVisible ? (
        <TouchableOpacity hitSlop={styles.hitSlop} onPress={goBack}>
          <Image style={styles.backButton} source={require('@assets/images/arrow.png')} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{name}</Text>
      {isBasketVisible ? (
        <TouchableOpacity>
          <Image style={styles.icon} source={require('@assets/images/basket.png')} />
        </TouchableOpacity>
      ) : null}
      {isProfile ? (
        <TouchableOpacity>
          <Image style={styles.icon} source={require('@assets/images/logout.png')} />
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};
