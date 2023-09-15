import { View } from "react-native";
import { IconButton } from "../../components/IconButton";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "@/Screens/Models/Screens";

type MenuProps = NativeStackScreenProps<RootScreensParamList>;

export const Menu = ({ navigation }: MenuProps) => {
  return (
    <View className="absolute bottom-0 bg-slate-100 border-t border-slate-200 flex flex-row justify-center">
      <IconButton
        icon="home"
        iconType="ionicon"
        onPress={() => navigation.navigate(Screen.Home)}
      />
      <IconButton
        icon="user-friends"
        iconType="font-awesome-5"
        onPress={() => navigation.navigate(Screen.Crew, { name: "Goldy" })}
      />
      <IconButton
        icon="rocket-sharp"
        iconType="ionicon"
        onPress={() => navigation.navigate(Screen.Quests, { name: "Maya" })}
      />
    </View>
  );
};
