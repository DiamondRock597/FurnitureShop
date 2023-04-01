import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { View, Text } from 'react-native';

import { GET_NAME } from '@graphql/user/queries';
import { Button } from '@components/button';

export const MainNavigator = () => {
  const [getName, { data }] = useLazyQuery(GET_NAME);

  return (
    <View>
      <Text>{data && data.getName.name}</Text>
      <Button text="Press me" onPress={getName} />
    </View>
  );
};
