import { AppStackParamList } from 'configs/navigation/routes';

declare global {
  namespace ReactNavigation {
    type RootParamList = AppStackParamList;
  }
}
