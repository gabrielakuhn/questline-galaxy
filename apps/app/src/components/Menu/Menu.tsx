import { View } from "react-native";
import { MenuButton } from "./MenuButton";

export const Menu = ({ navigation }: any) => {
  console.log("navigation menus", navigation);

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
