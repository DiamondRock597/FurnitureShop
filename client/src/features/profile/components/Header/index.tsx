import React from 'react';
import { View, Text } from 'react-native';

import { LogoutButton } from 'components/logout_button';

import { styles } from './styles';
import { useUser } from 'hooks/useUser';

export const ProfileHeader = () => {
  const { logout } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Profile</Text>
      <LogoutButton onPress={logout} />
    </View>
  );
};
