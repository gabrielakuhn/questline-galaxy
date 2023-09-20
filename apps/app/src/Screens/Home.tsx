import { Text, View, ScrollView } from "react-native";
import { Menu } from "../domain/Menu/Menu";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "./Models/Screens";
import { Button } from "@/components/Button";
import { useEffect } from "react";
import { Trip } from "@/domain/Trip/Trip";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";
import {
  fetchTrips,
  removeTrip as removeTripFromState,
} from "@/store/Domain/trips-slice";
import { RootState } from "@/store/store";
import { StoreStatus } from "@/store/Infrastructure/Status";
import { removeTripFromLocalStorage } from "@/domain/Trip/Application/TripsStorage";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const Home = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { trips, status: tripsStatus } = useAppSelector(
    (state: RootState) => state.tripsStore
  );

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

  /**
   * TODO: Create a generic structure for screens with <View><ScrollView><ContentView/></ScrollView><Menu/></View>
   */

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="pt-24 px-6 pb-28 space-y-6">
          <Text>Questline app met Typescript en Nativewind!</Text>
          {trips.map((trip) => (
            <View
              key={trip.id}
              className="border border-slate-400 border-dashed rounded-2xl"
            >
              <Trip trip={trip} remove={removeTrip} />
            </View>
          ))}
          <View>
            <Button
              onPress={() => navigation.navigate(Screen.CreateTrip)}
              title="Add Trip"
            />
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
