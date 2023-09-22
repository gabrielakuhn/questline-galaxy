import { Button } from "@/components/Button";
import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "../Models/Screens";
import { Layout } from "../Layout";

type Props = NativeStackScreenProps<RootScreensParamList, Screen.Quests>;

export const Quests = ({ navigation, route }: Props) => {
  return (
    <Layout navigation={navigation} route={route}>
      <View>
        <Button
          onPress={() => navigation.navigate(Screen.CreateQuest)}
          title="Add Quest"
        />
      </View>
    </Layout>
  );
};
