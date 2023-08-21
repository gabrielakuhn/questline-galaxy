import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@/Screens/Home";
import { Friends } from "@/Screens/Friends"
import { Quests } from "@/Screens/Quests"
import { RootScreensParamList, Screen } from "@/Screens/Types/Screens";

const Stack = createNativeStackNavigator<RootScreensParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Screen.Home} component={Home} />
        <Stack.Screen name={Screen.Friends} component={Friends} />
        <Stack.Screen name={Screen.Quests} component={Quests} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
