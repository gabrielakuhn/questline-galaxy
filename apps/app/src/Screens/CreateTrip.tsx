import { Button } from "@/components/Button";
import { Menu } from "@/domain/Menu/Menu";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList } from "./Models/Screens";
import { Text, ScrollView, TextInput, View } from "react-native";
import { useState } from "react";
import { Trip as TripModel } from "@/domain/Trip/Models/Trip";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const CreateTrip = ({ navigation, route }: Props) => {
  const [tripName, setTripName] = useState<string>("");

  const creatTrip = () => {
    console.log("create");
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="pt-24 px-6 pb-28 space-y-8">
          <Text className="text-lg">Choose or type the trip Name:</Text>
          <View className="flex items-center space-y-4">
            <View>
              <Button onPress={() => setTripName("EXC")} title="EXC" />
            </View>
            <View>
              <Button onPress={() => setTripName("LSD")} title="LSD" />
            </View>
            <View>
              <Button onPress={() => setTripName("QUETA")} title="QUETA" />
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
            <Button onPress={() => creatTrip()} title="Create" />
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
