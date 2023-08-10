import React from 'react';
import { useQuery } from '@apollo/client';

import { ScreenWrapper } from 'common/components/screen_wrapper';
import { ProfileInfo } from '../components/profile_info';
import { ProfileMenu } from '../components/profile_menu';
import { FullPageLoader } from 'common/components/full_page_loader';
import { User } from 'models/user/user';
import { ProfileHeader } from '../components/profile_header';
import { GET_PROFILE } from '../graphql/queries';

export const ProfileScreen = () => {
  const { data, loading } = useQuery<{ profile: User }>(GET_PROFILE);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <ScreenWrapper>
      <ProfileHeader />
      <ProfileInfo name={data?.profile.name} email={data?.profile.email} />
      <ProfileMenu addressesCount={data?.profile.addressesCount} paymentsCount={data?.profile.paymentsCount} />
    </ScreenWrapper>
  );
};
