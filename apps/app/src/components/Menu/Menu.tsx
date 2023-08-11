import { Alert, View } from "react-native"
import { MenuButton } from "./MenuButton"

export const Menu = () => {
  return (
    <View className="bg-slate-100 absolute bottom-0 w-full border-t border-slate-200">
      <View className="flex flex-row justify-center">
        <MenuButton icon="home" iconType="ionicon" onPress={() => Alert.alert("3...")}/>
        <MenuButton icon="rocket-sharp" iconType="ionicon" onPress={() => Alert.alert("2...")}/>
        <MenuButton icon="user-friends" iconType="font-awesome-5" onPress={() => Alert.alert("Lets Go!")}/>
      </View>
    </View>
  )
}
