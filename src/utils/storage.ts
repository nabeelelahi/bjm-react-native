import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const getStorageData = (key: string) => {
  return storage.getString(key);
};

export const setStorageData = (key: string, value: object) => {
  storage.set(key, JSON.stringify(value));
  return storage.getString(key);
};
