import { AppStackParamList } from 'navigation/routes';

declare global {
  namespace ReactNavigation {
    type RootParamList = AppStackParamList;
  }
}
