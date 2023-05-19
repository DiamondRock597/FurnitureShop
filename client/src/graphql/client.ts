import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { tokenRepository } from 'repositories/TokenRepository';
import { GRAPHQL_URL } from 'constants/urls';

const authLink = setContext(async (_, { headers }) => {
  const token = await tokenRepository.loadToken();
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
