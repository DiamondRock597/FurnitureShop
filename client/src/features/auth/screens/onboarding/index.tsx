import React, { useCallback } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Button, RoundedType } from 'common/components/button';
import { MainStackParamList, Routes } from 'configs/navigation/routes';
import { Fonts } from 'common/constants/fonts';

import { style } from './style';

export const Onboarding: React.FC = () => {
  const { reset }: NavigationProp<MainStackParamList> = useNavigation();

  const goToAuth = useCallback(() => reset({ index: 0, routes: [{ name: Routes.Auth }] }), [reset]);

  return (
    <ImageBackground source={require('@assets/images/onboarding.png')} style={style.imageContainer}>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Text style={style.firstTitle}>Make your</Text>
          <Text style={style.secondTitle}>Home Beautiful</Text>
        </View>
        <View style={style.descriptionContainer}>
          <Text style={style.description}>The best simple place where you discover most wonderful furnitures and make your home beautiful</Text>
          <View style={style.buttonContainer}>
            <Button text="Get Started" roundedType={RoundedType.Little} onPress={goToAuth} fontFamily={Fonts.GelasioMedium} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
