import { Button } from "@/components/Button"
import { Menu } from "@/components/Menu/Menu"
import { View, Text, Alert } from "react-native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "./Types/Stack";

type QuestsProps = NativeStackScreenProps<RootStackParamList, "Quests">

export const Quests = ({navigation, route}: QuestsProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-lime-200 space-y-10">
      <Text>This is {route.params.name}'s Quets</Text>
      <View>
        <Button title="Press me" onPress={() => Alert.alert("Ik ben een Alert!")}/>
      </View>
      <Menu navigation={navigation} route={route} />
    </View>
  )
}

