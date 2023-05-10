import React from 'react';

import { ScreenWrapper } from 'components/screen_wrapper';
import { ProfileInfo } from './components/ProfileInfo';
import { ProfileMenu } from './components/ProfileMenu';

export const ProfileScreen = () => (
  <ScreenWrapper>
    <ProfileInfo />
    <ProfileMenu />
  </ScreenWrapper>
);
