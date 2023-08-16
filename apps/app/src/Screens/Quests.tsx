import { Button } from "@/components/Button"
import { Menu } from "@/components/Menu/Menu"
import { View, Text, Alert } from "react-native"

export const Quests = ({navigation, route}: any) => {
  return (
    <View className="flex-1 items-center justify-center bg-lime-200 space-y-10">
      <Text>This is {route.params.name}'s Quets</Text>
      <View>
        <Button title="Press me" onPress={() => Alert.alert("Ik ben een Alert!")}/>
      </View>
      <Menu navigation={navigation} />
    </View>
  )
}

