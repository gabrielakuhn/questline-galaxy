import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Home } from '@/Screens/Home'
import { Friends } from '@/Screens/Friends'
import { Quests } from '@/Screens/Quests';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{title: 'Your Friends'}}
        />
        <Stack.Screen
          name="Quests"
          component={Quests}
          options={{title: 'Your Quests'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
