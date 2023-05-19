import React, { useCallback, useRef, useState } from 'react';
import { ScaledSize, ScrollView, useWindowDimensions } from 'react-native';

import { ScreenWrapper } from '@components/screen_wrapper';
import { SignIn } from '../sign_in';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { SignUp } from '../sign_up';

const START_POSITION = 0;

export const AuthScreen: React.FC = () => {
  const [isSignScreen, setIsSignScreen] = useState<boolean>(true);
  const { width }: ScaledSize = useWindowDimensions();
  const scroll = useRef<ScrollView>(null);

  const changeAuthScreen = useCallback(() => {
    scroll.current?.scrollTo({ x: isSignScreen ? START_POSITION : width, animated: true });
    setIsSignScreen(!isSignScreen);
  }, [setIsSignScreen, isSignScreen, width]);

  return (
    <ScreenWrapper>
      <Header />
      <Title isShowGreeting={isSignScreen} />
      <ScrollView ref={scroll} horizontal scrollEnabled={false} keyboardShouldPersistTaps="handled" showsHorizontalScrollIndicator={false}>
        <SignIn goToSignUp={changeAuthScreen} />
        <SignUp goToSignIn={changeAuthScreen} />
      </ScrollView>
    </ScreenWrapper>
  );
};
