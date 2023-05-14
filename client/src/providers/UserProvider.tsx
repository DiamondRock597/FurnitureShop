import React, { createContext, ReactElement, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { User } from 'models/user/user';
import { CHECK_AUTHORIZED_PROFILE } from 'graphql/user/queries';
import { tokenRepository } from 'repositories/TokenRepository';
import { AppStackParamList, Routes } from 'navigation/routes';

export interface UserStore {
  isSignedIn: boolean;
  loading: boolean;
  logout: () => Promise<void>;
}

interface Props {
  children: ReactElement;
}

export const UserContext = createContext<UserStore>({} as UserStore);

export const UserProvider: React.FC<Props> = (props) => {
  const { loading, data } = useQuery<{ profile: User }>(CHECK_AUTHORIZED_PROFILE);
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const logout = useCallback(async () => {
    await tokenRepository.removeToken();
    navigation.reset({ index: 0, routes: [{ name: Routes.Auth }] });
  }, [navigation]);

  const value = useMemo(() => ({ isSignedIn: !!data?.profile, loading, logout }), [data, loading, logout]);

  return <UserContext.Provider value={value} {...props} />;
};
