import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async <T>(value: T, key: string): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    throw new Error(`Not able to store data for key ${key}`);
  }
};

export const getData = async <T>(key: string): Promise<T> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(`Not able to get data for key ${key}`);
  }
};
