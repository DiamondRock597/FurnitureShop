import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';

import { style } from './style';

export const Header = React.memo(() => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToCart = () => navigation.navigate(MainStackRoutes.Cart);

  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image style={style.icon} source={require('@assets/images/search_icon.png')} />
      </TouchableOpacity>
      <View style={style.titleContainer}>
        <Text style={style.title}>Make home</Text>
        <Text style={style.subTitle}>Beautiful</Text>
      </View>
      <TouchableOpacity onPress={navigateToCart}>
        <Image style={style.icon} source={require('@assets/images/basket.png')} />
      </TouchableOpacity>
    </View>
  );
});
