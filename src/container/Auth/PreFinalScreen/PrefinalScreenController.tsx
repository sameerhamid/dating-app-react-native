import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {AuthContext, AuthContextTypes} from '../AuthContext';
import {AuthScreenEnums} from '../../../common/constants/enums';
import {getRegistrationProgress} from '../../../common/utils/registrationUtils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../common/utils/networkUtils';
import LocalStorageUtils from '../../../common/utils/localStorageUtils';
import {LocalStorageKeys} from '../../../common/utils/localStorageKeys';

interface UserData {
  Name?: string;
  Email?: string;
  Password?: string;
  Birth?: string;
  Location?: string;
  Gender?: string;
  Type?: string;
  Dating?: string;
  LookinFor?: string;
  HomeTown?: string;
  Photos?: string;
  Prompts?: string;
}
interface PrefinalScreenControllerType {
  token: string;
  userData?: UserData;
  regisetrUser?: () => void;
  setToken?: Dispatch<SetStateAction<string>>;
}
const usePrefinalScreenController = (): PrefinalScreenControllerType => {
  const [userData, setUserData] = useState<UserData>();

  //@ts-ignore
  const {token, setToken} = useContext<string>(AuthContext);

  const getAllUserData = async () => {
    try {
      const screens = [
        AuthScreenEnums.NAME,
        AuthScreenEnums.EMAIL,
        AuthScreenEnums.PASSWORD,
        AuthScreenEnums.BIRTH,
        AuthScreenEnums.LOCATION,
        AuthScreenEnums.GENDER,
        AuthScreenEnums.TYPE,
        AuthScreenEnums.DATING,
        AuthScreenEnums.LOOKING_FOR,
        AuthScreenEnums.HOME_TOWN,
        AuthScreenEnums.PHOTOS,
        AuthScreenEnums.PROMPTS,
      ];
      let userData = {};

      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = {...userData, ...screenData};
        }
      }

      setUserData(userData);
    } catch (error) {
      console.log(`Error in getting all user data >>> ${error}`);
    }
  };

  console.log('userData', JSON.stringify(userData));

  const regisetrUser = async (): Promise<void> => {
    console.log('useEffect---');

    axios
      .post('http://127.0.0.1:3000/register', userData)
      .then(async res => {
        console.log('response>>>', JSON.stringify(res));
        const token = res.data.token;
        await LocalStorageUtils.setItem(LocalStorageKeys.TOKEN, token);
        setToken(token);
      })
      .catch(err => {
        console.log('error>>>', err);
      });
  };

  // ========== Effects ===========

  useEffect(() => {
    getAllUserData();
  }, []);

  return {userData, token: token as string, regisetrUser};
};

export default usePrefinalScreenController;
