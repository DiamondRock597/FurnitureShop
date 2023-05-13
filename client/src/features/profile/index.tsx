import React from 'react';
import { useQuery } from '@apollo/client';

import { ScreenWrapper } from 'components/screen_wrapper';
import { ProfileInfo } from './components/ProfileInfo';
import { ProfileMenu } from './components/ProfileMenu';
import { GET_PROFILE } from 'graphql/user/queries';
import { FullPageLoader } from 'components/full_page_loader';
import { User } from 'models/user/user';

export const ProfileScreen = () => {
  const { data, loading } = useQuery<{ profile: User }>(GET_PROFILE);

  if (!loading) {
    return <FullPageLoader />;
  }

  return (
    <ScreenWrapper>
      <ProfileInfo name={data?.profile.name} email={data?.profile.email} />
      <ProfileMenu addressesCount={data?.profile.addressesCount} />
    </ScreenWrapper>
  );
};
