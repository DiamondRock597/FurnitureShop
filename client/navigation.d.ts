import { MainStackParamList } from 'navigation/routes';

declare global {
  namespace ReactNavigation {
    type RootParamList = MainStackParamList;
  }
}
