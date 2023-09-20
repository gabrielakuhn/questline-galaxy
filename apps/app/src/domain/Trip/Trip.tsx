import { Button, Text, View } from "react-native";
import { Timer } from "../../components/Timer";
import { Trip as TripModel } from "./Models/Trip";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";
import { getAllTrips } from "@/store/Domain/trips-slice";
import { removeTrip as removeTripFromState } from "@/store/Domain/trips-slice";
import { removeTripFromLocalStorage } from "./Application/TripsStorage";

interface Props {
  trip: TripModel;
}

export const Trip = ({ trip }: Props) => {
  const dispatch = useAppDispatch();
  const trips = useAppSelector(getAllTrips);

  const deleteTrip = async (id: string): Promise<void> => {
    const isRemoved = await removeTripFromLocalStorage(trips, id);
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
