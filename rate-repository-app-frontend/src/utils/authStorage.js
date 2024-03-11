import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
        `${this.namespace}:token`,

    );
    return token ? JSON.parse(token) : [];
  }

  async setAccessToken(accessToken) {
 
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(accessToken),
    );
  }
  

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}


const testi = async () => {
    const tokenA = new AuthStorage('StorageA');
    const tokenB = new AuthStorage('StorageB');
  
    await tokenA.setAccessToken('aaa');
    await tokenB.setAccessToken('bbb');
  
  
    const tokenforA = await tokenA.getAccessToken();
    const tokenforB  = await tokenB.getAccessToken();
  
    console.log(tokenforA, tokenforB);
  
    await tokenA.removeAccessToken();
    await tokenB.removeAccessToken();

    console.log(tokenforA, tokenforB);
  };
  
  testi();

export default AuthStorage;