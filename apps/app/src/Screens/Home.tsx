import { Text, View } from "react-native";
import { Menu } from "../components/Menu/Menu";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList } from "./Types/Screens";
import { TimerView } from "@/components/Timer";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { Trip } from "@/types/Trip";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const Home = ({ navigation, route }: Props) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const startTime = new Date("2023-09-05T12:46:55.815Z");

  const createTrip = (name: string) => {
    const newTrip = {
      id: new Date().getTime().toString(),
      name,
      start: new Date(),
    };

    setTrips((prevState) => [...prevState, newTrip]);
  };

  useEffect(() => {
    console.log("trips", trips);
  }, [trips]);

  return (
    <View className="flex-1 items-center justify-center bg-white space-y-10">
      <Text className="text-lg p-3">Hi!</Text>
      <Text>Questline app met Typescript en Nativewind!</Text>
      <View className="border border-slate-400 border-dashed rounded-2xl p-7 items-center space-y-6">
        {trips.map((trip) => (
          <TimerView key={trip.id} start={trip.start}>
            {trip.name}
          </TimerView>
        ))}
        <TimerView start={startTime}>NAME</TimerView>
      </View>
      <View>
        <Button onPress={() => createTrip("Trip Name")} title="Add Trip" />
      </View>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
