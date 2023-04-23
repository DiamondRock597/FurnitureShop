import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface TokenRepository {
  saveToken: (token: string) => Promise<void>;
  loadToken: () => Promise<string | null>;
  removeToken: () => void;
}

class TokenService implements TokenRepository {
  private static itemName: string = 'TOKEN';
  private token: string | null = '';

  public saveToken = async (token: string) => {
    try {
      this.token = token;
      await AsyncStorage.setItem(TokenService.itemName, token);
    } catch (error) {
      Alert.alert('SAVE TOKEN ERROR');
    }
  };

  public loadToken = async () => {
    try {
      if (!this.token) {
        const token = await AsyncStorage.getItem(TokenService.itemName);
        this.token = token || null;
      }

      return this.token;
    } catch (error) {
      Alert.alert('LOAD TOKEN ERROR');
    }
  };

  public removeToken = async () => {
    try {
      this.token = '';
      await AsyncStorage.setItem(TokenService.itemName, '');
    } catch (error) {
      Alert.alert('REMOVE TOKEN ERROR');
    }
  };
}

export const tokenService = new TokenService();
