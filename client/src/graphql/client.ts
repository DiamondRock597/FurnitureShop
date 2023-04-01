import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { tokenService } from '@services/TokenService';
import { GRAPHQL_URL } from '@configs/urls';

const authLink = setContext(async (_, { headers }) => {
  const token = await tokenService.loadToken();
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
