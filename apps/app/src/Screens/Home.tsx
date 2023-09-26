import { useEffect } from "react";
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootScreensParamList } from "@/types";
import {
  StoreStatus,
  useAppDispatch,
  useAppSelector,
} from "@/store/infrastructure";
import { fetchTrips, getTripStore } from "@/store/domain";
import { ScreenWrap } from "@/screens/ScreenWrap";
import { Trip, Button } from "@/components";
import { Screen } from "@/data/domain/list";

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
    <ScreenWrap navigation={navigation} route={route}>
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
    </ScreenWrap>
  );
};
