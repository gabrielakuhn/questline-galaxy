import { View } from "react-native";
import { MenuButton } from "./MenuButton";

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "@/Screens/Types/Stack";

type MenuProps = NativeStackScreenProps<RootStackParamList> 

export const Menu = ({ navigation }: MenuProps) => {
  return (
    <View className="absolute bottom-0 bg-slate-100 border-t border-slate-200 flex flex-row justify-center">
      <MenuButton
        icon="home"
        iconType="ionicon"
        onPress={() => navigation.navigate("Home")}
      />
      <MenuButton
        icon="user-friends"
        iconType="font-awesome-5"
        onPress={() => navigation.navigate("Friends", { name: "Goldy" })}
      />
      <MenuButton
        icon="rocket-sharp"
        iconType="ionicon"
        onPress={() => navigation.navigate("Quests", { name: "Maya" })}
      />
    </View>
  )
}
