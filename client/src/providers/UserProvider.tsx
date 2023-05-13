import React, { createContext, ReactElement, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { User } from 'models/user/user';
import { CHECK_AUTHORIZED_PROFILE } from 'graphql/user/queries';

export interface UserStore {
  isSignedIn: boolean;
  loading: boolean;
}

interface Props {
  children: ReactElement;
}

export const UserContext = createContext<UserStore>({} as UserStore);

export const UserProvider: React.FC<Props> = (props) => {
  const { loading, data } = useQuery<User>(CHECK_AUTHORIZED_PROFILE);

  const value = useMemo(() => ({ isSignedIn: !!data?.profile, loading }), [data, loading]);

  return <UserContext.Provider value={value} {...props} />;
};
