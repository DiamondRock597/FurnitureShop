import React from 'react';
import { View, Text } from 'react-native';

import { style } from './style';

interface Props {
  isShowGreeting: boolean;
}

export const Title: React.FC<Props> = ({ isShowGreeting }: Props) => (
  <View style={style.container}>
    {isShowGreeting && <Text style={style.greeting}>Hello !</Text>}
    <Text style={style.welcome}>{isShowGreeting ? 'Welcome Back' : 'Welcome'}</Text>
  </View>
);
