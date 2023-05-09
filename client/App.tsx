import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { AppNavigator } from '@navigation/AppNavigator';
import { client } from '@graphql/client';

import { UserProvider } from 'providers/UserProvider';

export const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <UserProvider>
        <AppNavigator />
      </UserProvider>
    </NavigationContainer>
  </ApolloProvider>
);
