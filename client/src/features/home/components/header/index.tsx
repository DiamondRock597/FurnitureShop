import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { style } from './style';

export const Header = React.memo(() => (
  <View style={style.container}>
    <TouchableOpacity>
      <Image style={style.icon} source={require('@assets/images/search_icon.png')} />
    </TouchableOpacity>
    <View style={style.titleContainer}>
      <Text style={style.title}>Make home</Text>
      <Text style={style.subTitle}>Beautiful</Text>
    </View>
    <TouchableOpacity>
      <Image style={style.icon} source={require('@assets/images/basket.png')} />
    </TouchableOpacity>
  </View>
));
