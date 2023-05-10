import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Colors } from 'constants/colors';

export const Loader: React.FC = () => <ActivityIndicator size="small" color={Colors.Primary} />;
