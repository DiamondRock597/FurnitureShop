import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';

import { AppNavigator } from '@navigation/AppNavigator';
import { client } from '@graphql/client';

export const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </ApolloProvider>
);