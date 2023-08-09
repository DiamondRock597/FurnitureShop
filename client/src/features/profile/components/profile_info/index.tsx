import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  name?: string;
  email?: string;
}

export const ProfileInfo: React.FC<Props> = ({ email, name }) => (
  <View style={styles.container}>
    <View style={styles.avatar} />
    <View style={styles.contentContainer}>
      <Text style={styles.name}>{name || 'Bruno Pham'}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  </View>
);
