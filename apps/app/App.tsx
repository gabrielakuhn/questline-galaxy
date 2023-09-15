import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";

import { Home } from "@/Screens/Home";
import { Crew } from "@/Screens/Crew";
import { Quests } from "@/Screens/Quests";
import { RootScreensParamList, Screen } from "@/Screens/Models/Screens";
import { store } from "@/store/store";

const Stack = createNativeStackNavigator<RootScreensParamList>();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={Screen.Home} component={Home} />
          <Stack.Screen name={Screen.Crew} component={Crew} />
          <Stack.Screen name={Screen.Quests} component={Quests} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
