import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';

export const style = StyleSheet.create({
  imageContainer: {
    borderRadius: 100,
    borderWidth: 0.5,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  container: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 25,
  },
  image: {
    tintColor: Colors.SecondaryBlack,
    resizeMode: 'contain',
    width: 34,
    height: 43,
  },
  line: {
    height: 1,
    width: '30%',
    backgroundColor: Colors.SecondaryGreyLight,
  },
});
