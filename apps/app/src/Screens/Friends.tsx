import { Menu } from "@/components/Menu/Menu"
import { View, Text } from "react-native"

export const Friends = ({navigation, route}: any) => {
  return (
    <View className="flex-1 items-center justify-center bg-orange-200 space-y-10">
      <Text>This is {route.params.name}'s friends</Text>
      <Menu navigation={navigation} />
    </View>
  )
}

