import {
  StorageKey,
  removeValueFromStoredArray,
} from "@/infrastructure/storage";
import {
  getTripStore,
  removeTrip as removeTripFromState,
} from "@/store/domain";
import { useAppDispatch, useAppSelector } from "@/store/infrastructure";
import { Trip as TripModel } from "@/types";
import { Button, Text, View } from "react-native";
import { Timer } from "@/components/generic/Timer";

interface Props {
  trip: TripModel;
}

export const Trip = ({ trip }: Props) => {
  const dispatch = useAppDispatch();
  const { trips } = useAppSelector(getTripStore);

  const deleteTrip = async (id: string): Promise<void> => {
    const isRemoved = await removeValueFromStoredArray(
      trips,
      id,
      StorageKey.Trips
    );

    if (isRemoved) {
      dispatch(removeTripFromState(id));
    }
  };

  return (
    <View className="flex flex-row p-6 items-center">
      <Text className="font-bold pr-3">{trip.name}</Text>
      <Timer start={new Date(trip.start)} />
      <View className="mb-1">
        <Button onPress={() => deleteTrip(trip.id)} title="x"></Button>
      </View>
    </View>
  );
};
