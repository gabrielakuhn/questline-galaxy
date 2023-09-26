import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";

import { Home } from "@/screens/Home";
import { Crew } from "@/screens/domain/crew/Crew";
import { Quests } from "@/screens/domain/quest/Quests";
import { store } from "@/store/store";
import { CreateTrip } from "@/screens/domain/trip/CreateTrip";
import { CreateQuest } from "@/screens/domain/quest/CreateQuest";
import { RootScreensParamList } from "@/types/domain/Screen";
import { Screen } from "@/data/domain/lists/Screen";

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
