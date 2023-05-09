import React from 'react';
import { View, Text } from 'react-native';

import { useUser } from 'hooks/useUser';

import { styles } from './styles';

export const ProfileInfo = () => {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{user?.name || 'Bruno Pham'}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
    </View>
  );
};
