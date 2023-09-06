import { Alert, Text, View } from "react-native";
import { Menu } from "../domain/Menu/Menu";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList } from "./Models/Screens";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { error } from "@/infrastructure/errors/messages";
import { StorageKey } from "@/infrastructure/storage/localstorage/Keys";
import {
  getData,
  storeData,
} from "@/infrastructure/storage/localstorage/AsyncStorage";
import { Trip } from "@/domain/Trip/Trip";
import { Trip as TripModel } from "@/domain/Trip/Models/Trip";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const Home = ({ navigation, route }: Props) => {
  const [trips, setTrips] = useState<TripModel[]>([]);

  const setTripsState = (trips: TripModel[]) => {
    storeData<TripModel[]>(trips, StorageKey.Trips).then((succes) => {
      if (succes) {
        setTrips(trips);
      } else {
        Alert.alert(error.Something_Wrong);
      }
    });
  };

  const createTrip = (name: string) => {
    const newTrip = {
      id: new Date().getTime().toString(),
      name,
      start: new Date(),
    };

    const newState = [...trips, newTrip];
    setTripsState(newState);
  };

  const removeTrip = (id: string) => {
    const newState = trips.filter((trip) => trip.id !== id);
    setTripsState(newState);
  };

  const getTrips = async () => {
    let storedTrips: TripModel[] = [];

    await getData<TripModel[]>(StorageKey.Trips).then((value) => {
      storedTrips = value;
    });

    if (storedTrips.length > 0) {
      setTrips(storedTrips);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

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
        <Button onPress={() => createTrip("Trip Name")} title="Add Trip" />
      </View>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
