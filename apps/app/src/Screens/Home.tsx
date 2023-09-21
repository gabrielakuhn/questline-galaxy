import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "./Models/Screens";
import { Button } from "@/components/Button";
import { useEffect } from "react";
import { Trip } from "@/domain/Trip/Trip";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";
import { fetchTrips, getTripStore } from "@/store/Domain/trips-slice";
import { StoreStatus } from "@/store/Infrastructure/Status";
import { Layout } from "./Layout";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const Home = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { trips, status: tripsStatus } = useAppSelector(getTripStore);

  useEffect(() => {
    if (tripsStatus === StoreStatus.IDLE) {
      dispatch(fetchTrips());
    }
  });

  return (
    <Layout navigation={navigation} route={route}>
      <View className="space-y-8">
        <Text>Questline app met Typescript en Nativewind!</Text>
        {trips.map((trip) => (
          <View
            key={trip.id}
            className="border border-slate-400 border-dashed rounded-2xl"
          >
            <Trip trip={trip} />
          </View>
        ))}
        <View>
          <Button
            onPress={() => navigation.navigate(Screen.CreateTrip)}
            title="Add Trip"
          />
        </View>
      </View>
    </Layout>
  );
};
