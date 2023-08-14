import { StyleSheet } from 'react-native';

import { Fonts } from 'common/constants/fonts';
import { Colors } from 'common/constants/colors';

export const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 15,
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  checkboxContainer: {
    width: 20,
    height: 20,
  },
  controlTitle: {
    fontFamily: Fonts.NunitoRegular,
    fontSize: 18,
    lineHeight: 25,
    color: Colors.SecondaryBlackBold,
  },
  removeButton: {
    borderRadius: 12,
    backgroundColor: 'red',
    opacity: 0.65,
    padding: 1,
  },
  removeIcon: {
    tintColor: 'white',
    transform: [
      {
        rotateZ: '45deg',
      },
    ],
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    right: 5,
    left: 5,
  },
});
