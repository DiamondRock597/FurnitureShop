import React, { createContext, ReactElement, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { User } from 'models/user/user';
import { GET_PROFILE } from 'graphql/user/queries';

export interface UserStore {
  user?: User;
  loading: boolean;
}

interface Props {
  children: ReactElement;
}

export const UserContext = createContext<UserStore>({} as UserStore);

export const UserProvider: React.FC<Props> = (props) => {
  const { loading, data } = useQuery<User>(GET_PROFILE);

  const value = useMemo(() => ({ user: data?.profile, loading }), [data, loading]);

  return <UserContext.Provider value={value} {...props} />;
};
