import { Button, Text, View } from "react-native";
import { Timer } from "../../components/Timer";
import { Trip as TripModel } from "./Models/Trip";

interface Props {
  trip: TripModel;
  remove: (id: string) => void;
}

export const Trip = ({ trip, remove }: Props) => {
  return (
    <View className="flex flex-row p-6 items-center">
      <Text className="font-bold pr-3">{trip.name}</Text>
      <Timer start={trip.start} />
      <View className="mb-1">
        <Button onPress={() => remove(trip.id)} title="x"></Button>
      </View>
    </View>
  );
};
