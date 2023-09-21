import { Text } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "./Models/Screens";
import { Layout } from "./Layout";

type Props = NativeStackScreenProps<RootScreensParamList, Screen.Crew>;

export const Crew = ({ navigation, route }: Props) => {
  return (
    <Layout navigation={navigation} route={route}>
      <Text>This is {route.params.name}'s Crew</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo
      </Text>
    </Layout>
  );
};
