import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";

import { Home } from "@/Screens/Home";
import { Crew } from "@/Screens/Crew";
import { Quests } from "@/Screens/Quests";
import { RootScreensParamList, Screen } from "@/Screens/Models/Screens";
import { store } from "@/store/store";
import { CreateTrip } from "@/Screens/CreateTrip";

const Stack = createNativeStackNavigator<RootScreensParamList>();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={Screen.Home} component={Home} />
            <Stack.Screen name={Screen.Crew} component={Crew} />
            <Stack.Screen name={Screen.Quests} component={Quests} />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              headerShown: true,
              headerTitle: "Create trip",
              headerStyle: { backgroundColor: "rgb(248 250 252)" },
            }}
          >
            <Stack.Screen name={Screen.CreateTrip} component={CreateTrip} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
