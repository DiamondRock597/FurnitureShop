import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface Props {
  isProfile?: boolean;
}

export const Header: React.FC<Props> = ({ isProfile }) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity>
      <Image style={styles.icon} source={require('@assets/images/search_icon.png')} />
    </TouchableOpacity>
    <Text style={styles.title}>Profile</Text>
    <TouchableOpacity>
      <Image style={styles.icon} source={isProfile ? require('@assets/images/logout.png') : require('@assets/images/basket.png')} />
    </TouchableOpacity>
  </SafeAreaView>
);
