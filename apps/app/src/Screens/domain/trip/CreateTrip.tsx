import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Layout } from "@/screens/Layout";
import { RootScreensParamList } from "@/types";
import { Button } from "@/components";
import { Screen, Trips as tripsList } from "@/data/domain/list";
import { useAppDispatch, useAppSelector } from "@/store/infrastructure";
import { addTrip as addTripToStore, getTripStore } from "@/store/domain";
import {
  StorageKey,
  storeValueIntoStoredArray,
} from "@/infrastructure/storage";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const CreateTrip = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { trips } = useAppSelector(getTripStore);

  const [tripName, setTripName] = useState<string>("");

  const createTrip = async (name: string): Promise<void> => {
    const newTrip = {
      id: new Date().getTime().toString(),
      name,
      start: new Date().toString(),
    };

    const isStored = await storeValueIntoStoredArray(
      trips,
      newTrip,
      StorageKey.Trips
    );

    if (isStored) {
      dispatch(addTripToStore(newTrip));
      navigation.navigate(Screen.Home);
    }
  };

  return (
    <Layout navigation={navigation} route={route}>
      <View className="space-y-8">
        <Text className="text-lg">Choose or type the trip Name:</Text>
        <View className="flex items-center space-y-4">
          {tripsList.map((trip) => (
            <View key={trip.name}>
              <Button
                onPress={() => setTripName(trip.name)}
                title={trip.name}
              />
            </View>
          ))}
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
    </Layout>
  );
};
