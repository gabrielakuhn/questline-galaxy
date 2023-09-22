import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";

import { Home } from "@/Screens/Home";
import { Crew } from "@/Screens/Crew";
import { Quests } from "@/Screens/Quest/Quests";
import { RootScreensParamList, Screen } from "@/Screens/Models/Screens";
import { store } from "@/store/store";
import { CreateTrip } from "@/Screens/CreateTrip";
import { CreateQuest } from "@/Screens/Quest/CreateQuest";

const Stack = createNativeStackNavigator<RootScreensParamList>();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerShown: true,
            }}
          >
            <Stack.Screen name={Screen.Home} component={Home} />
            <Stack.Screen name={Screen.Crew} component={Crew} />
            <Stack.Screen name={Screen.Quests} component={Quests} />
            <Stack.Screen name={Screen.CreateTrip} component={CreateTrip} />
            <Stack.Screen name={Screen.CreateQuest} component={CreateQuest} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
