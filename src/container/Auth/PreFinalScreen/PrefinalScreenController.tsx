import {Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../AuthContext';
import {AuthScreenEnums} from '../../../common/constants/enums';
import {getRegistrationProgress} from '../../../common/utils/registrationUtils';

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
interface PrefinalScreenControllerProps {
  token: string;
  userData?: UserData;
  regisetrUser?: () => void;
}
const usePrefinalScreenController = (): PrefinalScreenControllerProps => {
  const [userData, setUserData] = useState<UserData>();
  //@ts-ignore
  const {token, setToken} = useContext(AuthContext);

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

  console.log(userData);

  const regisetrUser = async (): Promise<void> => {
    try {
    } catch (error) {
      console.log(`Error While registering the user>>> ${error}`);
    }
  };
  useEffect(() => {
    getAllUserData();
  }, []);

  return {userData, token, regisetrUser};
};

export default usePrefinalScreenController;
