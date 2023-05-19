import { Routes } from 'navigation/routes';
import React, { useMemo } from 'react';
import { Image } from 'react-native';

import { style } from './style';

interface Props {
  name: Routes;
  color: string;
}

const bottomTabsIcon = {
  [Routes.Home]: require('@assets/images/tabs/home_tab.png'),
  [Routes.Favorites]: require('@assets/images/tabs/favorites_tab.png'),
  [Routes.Profile]: require('@assets/images/tabs/profile_tab.png'),
};

export const TabIcon: React.FC<Props> = React.memo(({ name, color }: Props) => {
  const imageStyle = useMemo(() => [style.icon, { tintColor: color }], [color]);

  return <Image style={imageStyle} source={bottomTabsIcon[name]} />;
});
