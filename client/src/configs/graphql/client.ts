import { ApolloClient, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { tokenRepository } from 'configs/repositories/TokenRepository';
import { GRAPHQL_URL } from 'common/constants/urls';

export const authTokenVar = makeVar<string | null>(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkVtYWlsIiwiaWQiOiI2MmEzNDQ2MjRjZDc5Y2UyOWFhZmRhNTYiLCJpYXQiOjE2NTUzODA0MDJ9.zKFFCzb8o0o1Rx_3PBuhuoH8SiPN8zWAXH3NIwXQ7WY'
);

const authLink = setContext(async (_, { headers }) => {
  const token = await tokenRepository.loadToken();
  authTokenVar(token);

  return {
    headers: {
      ...headers,
      token: token || '',
    },
  };
});

const httpLink = new HttpLink({ uri: GRAPHQL_URL });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
