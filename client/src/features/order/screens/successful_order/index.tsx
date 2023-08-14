import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, StatusBar, ImageBackground, Image } from 'react-native';

import { TransparentButton } from 'common/components/transparent_button';
import { AppStackParamList, MainStackRoutes, MainTabRoutes } from 'configs/navigation/routes';

import { styles } from './styles';

export const SuccessfulOrderScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToHome = () => navigation.navigate(MainStackRoutes.TabNavigator, { screen: MainTabRoutes.Home });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>SUCCESS!</Text>
      <ImageBackground style={styles.imageBackground} source={require('@assets/images/background.png')}>
        <Image resizeMode="cover" style={styles.image} source={require('@assets/images/furnitures.png')} />
      </ImageBackground>
      <Image style={styles.successContainer} source={require('@assets/images/success_icon.png')} />
      <Text style={styles.subtitle} numberOfLines={2}>
        Your order will be delivered soon. Thank you for choosing our app!
      </Text>
      <TransparentButton onPress={navigateToHome} style={styles.button} text="BACK TO HOME" />
    </View>
  );
};
