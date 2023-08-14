import AsyncStorage from '@react-native-async-storage/async-storage';
class TokenRepository {
  private static itemName: string = 'ACCESS_TOKEN';
  private token: string | null = '';

  public get accessToken() {
    return this.token;
  }

  public saveToken = async (token: string) => {
    this.token = token;
    await AsyncStorage.setItem(TokenRepository.itemName, token);
  };

  public loadToken = async () => {
    if (!this.token) {
      const token = await AsyncStorage.getItem(TokenRepository.itemName);

      this.token = token || null;
    }

    return this.token;
  };

  public removeToken = async () => {
    this.token = '';
    await AsyncStorage.setItem(TokenRepository.itemName, '');
  };
}

export const tokenRepository = new TokenRepository();
