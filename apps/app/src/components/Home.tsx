import { Alert, View } from "react-native";
import { MenuButton } from "./Menu/MenuButton";
import { Button } from "@rneui/base";


export const Home = ({navigation}:any) => {
  return (
    <View className="flex-1 items-center justify-center bg-orange-200 space-y-10">
      
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
    </View>
  )
}

