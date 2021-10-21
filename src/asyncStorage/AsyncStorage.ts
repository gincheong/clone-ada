import AsyncStorage from '@react-native-async-storage/async-storage';
// interfaces
import { AsyncStorageProps, DefaultValue } from './interfaces';

export const setStorageData = async (
  key: keyof AsyncStorageProps,
  value: string,
) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // TODO 에러 처리
    console.error(error);
  }
};

export const getStorageData = async (key: keyof AsyncStorageProps) => {
  try {
    const result = await AsyncStorage.getItem(key);

    // 데이터 없을 시 기본값 사용
    return result ?? DefaultValue[key];
  } catch (error) {
    // TODO 에러 처리
    console.error(error);
  }
};
