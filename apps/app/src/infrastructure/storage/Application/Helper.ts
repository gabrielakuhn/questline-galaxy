import { setStorage } from "../localstorage/AsyncStorage";
import { StorageKey } from "../localstorage/Keys";

export const storeValueIntoStoredArray = <T>(
  currentArray: T[],
  newValue: T,
  key: StorageKey
): Promise<boolean> => {
  const newState = [newValue, ...currentArray];
  const isStored = setStorage<T[]>(newState, key);
  return isStored;
};

export const removeValueFromStoredArray = <T extends { id?: string }>(
  currentArray: T[],
  id: string,
  key: StorageKey
): Promise<boolean> => {
  const newState = currentArray.filter((value) => value.id !== id);

  const isRemoved = setStorage<T[]>(newState, key);
  return isRemoved;
};

export const modifyValueIntoStoredArray = <T extends { id?: string }>(
  currentArray: T[],
  modifiedValue: T,
  key: StorageKey
): Promise<boolean> => {
  const indexToModify = currentArray.findIndex(
    (value) => value.id == modifiedValue.id
  );

  currentArray[indexToModify] = {
    ...currentArray[indexToModify],
    ...modifiedValue,
  };

  const newState = currentArray;
  const isStored = setStorage<T[]>(newState, key);
  return isStored;
};
