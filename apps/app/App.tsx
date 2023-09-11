import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";

import { Home } from "@/screens/Home";
import { Crew } from "@/screens/Crew";
import { Quests } from "@/screens/Quests";
import { RootScreensParamList, Screen } from "@/screens/Models/Screens";
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
