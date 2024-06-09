import {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react';

import {AuthScreenEnums} from '../../../common/constants/enums';
import {getRegistrationProgress} from '../../../common/utils/registrationUtils';
import axios from 'axios';
import LocalStorageUtils from '../../../common/utils/localStorageUtils';
import {LocalStorageKeys} from '../../../common/utils/localStorageKeys';
import {Alert} from 'react-native';
import {AuthContext, AuthContextTypes} from '../AuthContext';
import {replace} from '../../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../../common/constants/navScreenTags';

interface UserData {
  firstName?: string;
  email?: string;
  password?: string;
  dateOfBirth?: string;
  Location?: string;
  gender?: string;
  type?: string;
  datingPreferences?: string;
  looingfor?: string;
  home?: string;
  imageUrls?: string;
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
  const {token, setToken} = useContext<AuthContextTypes>(AuthContext);

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

  const regisetrUser = async (): Promise<void> => {
    if (userData?.email !== undefined) {
      console.log('inside if---');
      axios
        .post('http://127.0.0.1:3000/register', userData)
        .then(async res => {
          const token = res.data.token;
          await LocalStorageUtils.removeAll();
          await LocalStorageUtils.setItem(LocalStorageKeys.TOKEN, token);
          //@ts-ignore
          setToken(token);
          replace(NavScreenTags.BOTTOM_TAB_NAV);
        })
        .catch(err => {
          console.log('error>>>', err);
        });
    } else {
      Alert.alert('User details is empty');
    }
  };

  // ========== Effects ===========

  useEffect(() => {
    getAllUserData();
  }, []);

  return {userData, token: token as string, regisetrUser};
};

export default usePrefinalScreenController;
