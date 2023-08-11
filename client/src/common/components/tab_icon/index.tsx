import React, { useMemo } from 'react';
import { Image } from 'react-native';

import { MainStackRoutes, MainTabRoutes } from 'configs/navigation/routes';

import { style } from './style';

interface Props {
  name: MainStackRoutes;
  color: string;
}

const bottomTabsIcon = {
  [MainTabRoutes.Home]: require('@assets/images/tabs/home_tab.png'),
  [MainStackRoutes.Favorites]: require('@assets/images/tabs/favorites_tab.png'),
  [MainTabRoutes.Profile]: require('@assets/images/tabs/profile_tab.png'),
};

export const TabIcon: React.FC<Props> = React.memo(({ name, color }: Props) => {
  const imageStyle = useMemo(() => [style.icon, { tintColor: color }], [color]);

  return <Image style={imageStyle} source={bottomTabsIcon[name]} />;
});
