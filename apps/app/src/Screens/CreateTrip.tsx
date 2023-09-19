import { Button } from "@/components/Button";
import { Menu } from "@/domain/Menu/Menu";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList } from "./Models/Screens";
import { Text, ScrollView, TextInput, View } from "react-native";
import { useState } from "react";
import { storeTripIntoLocalStorage } from "@/domain/Trip/Application/TripsStorage";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";

import {
  addTrip as addTripToStore,
  getAllTrips,
} from "@/store/Domain/trips-slice";
import { Trips } from "@/domain/Trip/Models/Trips";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const CreateTrip = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const trips = useAppSelector(getAllTrips);

  const [tripName, setTripName] = useState<string>("");

  const createTrip = async (name: string): Promise<void> => {
    const newTrip = {
      id: new Date().getTime().toString(),
      name,
      start: new Date().toString(),
    };

    const isStored = await storeTripIntoLocalStorage(trips, newTrip);
    if (isStored) {
      dispatch(addTripToStore(newTrip));
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="pt-24 px-6 pb-28 space-y-8">
          <Text className="text-lg">Choose or type the trip Name:</Text>
          <View className="flex items-center space-y-4">
            <View>
              <Button
                onPress={() => setTripName(Trips.Energy)}
                title={Trips.Energy}
              />
            </View>
            <View>
              <Button
                onPress={() => setTripName(Trips.Psy)}
                title={Trips.Psy}
              />
            </View>
            <View>
              <Button
                onPress={() => setTripName(Trips.Love)}
                title={Trips.Love}
              />
            </View>
          </View>
          <View>
            <Text className="text-lg">Trip Name:</Text>
            <TextInput
              onChangeText={setTripName}
              value={tripName}
              className="bg-slate-100 p-4 border border-slate-400"
            />
          </View>
          <View>
            <Button onPress={() => createTrip(tripName)} title="Create" />
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
