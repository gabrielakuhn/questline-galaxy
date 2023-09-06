import { Button } from "@/components/Button";
import { Menu } from "@/domain/Menu/Menu";
import { View, Text, Alert } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "./Models/Screens";

type Props = NativeStackScreenProps<RootScreensParamList, Screen.Quests>;

export const Quests = ({ navigation, route }: Props) => {
  return (
    <View className="flex-1 items-center justify-center bg-lime-200 space-y-10">
      <Text>This is {route.params.name}'s Quets</Text>
      <View>
        <Button
          title="Press me"
          onPress={() => Alert.alert("Ik ben een Alert!")}
        />
      </View>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
