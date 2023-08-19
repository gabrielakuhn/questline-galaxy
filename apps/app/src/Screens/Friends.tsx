import { Menu } from "@/components/Menu/Menu"
import { View, Text } from "react-native"

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootScreensParamList } from "./Types/Screens";

type FriendsProps = NativeStackScreenProps<RootScreensParamList, "Friends">

export const Friends = ({navigation, route}: FriendsProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-orange-200 space-y-10">
      <Text>This is {route.params.name}'s friends</Text>
      <Menu navigation={navigation} route={route} />
    </View>
  )
}

