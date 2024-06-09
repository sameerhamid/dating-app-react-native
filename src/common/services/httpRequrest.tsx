import axios from 'axios';
import Config from 'react-native-config';
import {LocalStorageKeys} from '../utils/localStorageKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function getCommonHeaders() {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}

const api = axios.create({
  baseURL: Config.baseUrl,
  headers: getCommonHeaders(),
});

api.interceptors.request.use(async request => {
  const authToken = await AsyncStorage.getItem(LocalStorageKeys.TOKEN);
  if (authToken) {
    request.headers.Authorization = `Bearer ${authToken}`;
  }

  console.log(`requeest>>> ${request.headers.Authorization}`);

  return request;
});
/**
 * to post request through given url
 * @param url
 * @param data
 * @param successCallback
 * @param errorCallback
 * @returns
 */
export const Post = async (
  url: string,
  data: {},
  successCallback: (_arg0: unknown) => void,
  errorCallback: (_arg0: unknown) => void,
): Promise<void> => {
  api
    .post(url, data)
    .then(res => {
      console.log(res.data);
      successCallback(res.data);
    })
    .catch(err => {
      console.log(err);

      errorCallback(err?.message);
    });
};

/**
 * get method to fetch data from given url
 * @param url
 * @param successCallback
 * @param errorCallback
 */
export const Get = async (
  url: string,
  successCallback: (_arg0: unknown) => void,
  errorCallback: (_arg0: unknown) => void,
): Promise<void> => {
  api
    .get(url)
    .then(response => {
      console.log(response.data);
      successCallback(response.data);
    })
    .catch(error => {
      console.log(error);
      errorCallback(error);
    });
};
