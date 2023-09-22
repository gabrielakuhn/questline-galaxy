import { Button } from "@/components/Button";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList } from "../Models/Screens";
import { Text, View } from "react-native";
import { Layout } from "../Layout";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const CreateQuest = ({ navigation, route }: Props) => {
  const createQuest = async () => {
    console.log("create");
  };

  return (
    <Layout navigation={navigation} route={route}>
      <View className="space-y-8">
        <Text className="text-lg">Create quest</Text>
        <View>
          <Button onPress={() => createQuest()} title="Create Quest" />
        </View>
      </View>
    </Layout>
  );
};
