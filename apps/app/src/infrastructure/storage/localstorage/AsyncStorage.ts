import { error } from "@/infrastructure/errors/messages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const setStorage = async <T>(
  value: T,
  key: string
): Promise<boolean> => {
  try {
    await storeData<T>(value, key);
    return true;
  } catch (e) {
    Alert.alert(error.Something_Wrong);
    return false;
  }
};

export const storeData = async <T>(value: T, key: string): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    return AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw new Error(`Not able to store data for key ${key}`, { cause: e });
  }
};

export const getData = async <T>(key: string): Promise<T> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(`Not able to get data for key ${key}`, { cause: e });
  }
};
