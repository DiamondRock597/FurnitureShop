import React from 'react';
import { BackButton } from 'components/back_button';
import { Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface Props {
  isProfile?: boolean;
  isBackButtonVisible?: boolean;
  isBasketVisible?: boolean;
  name: string;
}

export const Header: React.FC<Props> = ({ isProfile, name, isBackButtonVisible, isBasketVisible }) => (
  <SafeAreaView style={styles.container}>
    {isBackButtonVisible ? <BackButton /> : null}
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
