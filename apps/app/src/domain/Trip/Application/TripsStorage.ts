import { Trip as TripModel } from "@/domain/Trip/Models/Trip";
import { setStorage } from "@/infrastructure/storage/localstorage/AsyncStorage";
import { StorageKey } from "@/infrastructure/storage/localstorage/Keys";

export const storeTripIntoLocalStorage = (
  currentTrips: TripModel[],
  newValue: TripModel
): Promise<boolean> => {
  const newState = [newValue, ...currentTrips];
  const isStored = setStorage<TripModel[]>(newState, StorageKey.Trips);
  return isStored;
};

export const removeTripFromLocalStorage = (
  currentTrips: TripModel[],
  id: string
): Promise<boolean> => {
  const newState = currentTrips.filter((trip) => trip.id !== id);
  const isRemoved = setStorage<TripModel[]>(newState, StorageKey.Trips);
  return isRemoved;
};
