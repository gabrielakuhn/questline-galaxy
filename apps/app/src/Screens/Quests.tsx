import { Button } from "@/components/Button";
import { View, Text, Alert } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "./Models/Screens";
import { Layout } from "./Layout";

type Props = NativeStackScreenProps<RootScreensParamList, Screen.Quests>;

export const Quests = ({ navigation, route }: Props) => {
  return (
    <Layout navigation={navigation} route={route}>
      <Text>This is {route.params.name}'s Quets</Text>
      <View>
        <Button
          title="Press me"
          onPress={() => Alert.alert("Ik ben een Alert!")}
        />
      </View>
    </Layout>
  );
};
