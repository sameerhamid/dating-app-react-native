import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import LocalStorageUtils from '../../common/utils/localStorageUtils';
import {LocalStorageKeys} from '../../common/utils/localStorageKeys';

export interface AuthContextTypes {
  Provider: any;
  token?: string;
  setToken?: Dispatch<SetStateAction<string>>;
  isLoading?: boolean;
  setIsloading?: Dispatch<SetStateAction<boolean>>;
}

const AuthContext: AuthContextTypes = createContext({
  token: '',
  setToken: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

const AuthProvider = ({children}: any) => {
  const [token, setToken] = useState<AuthContextTypes['token']>('');
  const [isLoading, setIsloading] =
    useState<AuthContextTypes['isLoading']>(false);
  const isLoggedIn = async () => {
    try {
      setIsloading(true);
      const userToken = await LocalStorageUtils.getItem(LocalStorageKeys.TOKEN);
      //@ts-ignore
      setToken(userToken ?? '');
      setIsloading(false);
    } catch (error) {
      console.log(`Error>>> ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, [token]);

  return (
    <AuthContext.Provider value={{token, setToken, isLoading, setIsloading}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
