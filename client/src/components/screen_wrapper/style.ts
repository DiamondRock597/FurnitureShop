import { StyleSheet } from 'react-native';

import { Colors } from 'constants/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    paddingHorizontal: 20,
  },
  safeArea: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.Primary,
  },
});
