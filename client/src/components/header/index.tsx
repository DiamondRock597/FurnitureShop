import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton } from 'components/back_button';
import { LogoutButton } from 'components/logout_button';

import { styles } from './styles';

interface Props {
  isProfile?: boolean;
  isBackButtonVisible?: boolean;
  name: string;
}

export const Header: React.FC<Props> = ({ isProfile, name, isBackButtonVisible }) => (
  <SafeAreaView style={styles.container}>
    {isBackButtonVisible ? <BackButton /> : null}
    <Text style={styles.title}>{name}</Text>
    {isProfile ? <LogoutButton /> : null}
  </SafeAreaView>
);
