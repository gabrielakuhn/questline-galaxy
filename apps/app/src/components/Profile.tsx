import { Alert, View } from "react-native";
import { MenuButton } from "./Menu/MenuButton";
import { Text } from "@rneui/base";

export const Profile = ({navigation, route}: any) => {
  return (
    <View className="flex-1 items-center justify-center bg-pink-200 space-y-10">
      
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  )
}

