import { Text, View } from "react-native";
import { Menu } from "../domain/Menu/Menu";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "./Models/Screens";
import { Button } from "@/components/Button";
import { useEffect } from "react";
import { Trip } from "@/domain/Trip/Trip";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";
import {
  fetchTrips,
  addTrip as addTripToState,
  removeTrip as removeTripFromState,
} from "@/store/Domain/trips-slice";
import { RootState } from "@/store/store";
import { StoreStatus } from "@/store/Infrastructure/Status";
import {
  removeTripFromLocalStorage,
  storeTripIntoLocalStorage,
} from "@/domain/Trip/Application/TripsStorage";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const Home = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { trips, status: tripsStatus } = useAppSelector(
    (state: RootState) => state.tripsStore
  );

  const createTrip = async (name: string): Promise<void> => {
    const newTrip = {
      id: new Date().getTime().toString(),
      name,
      start: new Date().toString(),
    };

    const isStored = await storeTripIntoLocalStorage(trips, newTrip);
    if (isStored) {
      dispatch(addTripToState(newTrip));
    }
  };

  const removeTrip = async (id: string): Promise<void> => {
    const isRemoved = await removeTripFromLocalStorage(trips, id);
    if (isRemoved) {
      dispatch(removeTripFromState(id));
    }
  };

  useEffect(() => {
    if (tripsStatus === StoreStatus.IDLE) {
      dispatch(fetchTrips());
    }
  });

  return (
    <View className="flex-1 items-center justify-center bg-white space-y-10">
      <Text className="text-lg p-3">Hi!</Text>
      <Text>Questline app met Typescript en Nativewind!</Text>
      <View className="space-y-6">
        {trips.map((trip) => (
          <View
            key={trip.id}
            className="border border-slate-400 border-dashed rounded-2xl"
          >
            <Trip trip={trip} remove={removeTrip} />
          </View>
        ))}
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate(Screen.CreateTrip)}
          title="Add Trip"
        />
      </View>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
