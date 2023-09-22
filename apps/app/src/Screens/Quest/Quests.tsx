import { Button } from "@/components/Button";
import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList, Screen } from "../Models/Screens";
import { Layout } from "../Layout";
import { Text } from "@rneui/base";
import { fetchQuests, getQuestStore } from "@/store/Domain/quest-slice";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";
import { StoreStatus } from "@/store/Infrastructure/Status";
import { useEffect } from "react";
import { Quest } from "@/domain/Quest/Quest";

type Props = NativeStackScreenProps<RootScreensParamList, Screen.Quests>;

export const Quests = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { quests, status: questStatus } = useAppSelector(getQuestStore);

  useEffect(() => {
    if (questStatus === StoreStatus.IDLE) {
      dispatch(fetchQuests());
    }
  });

  return (
    <Layout navigation={navigation} route={route}>
      <View className="space-y-8">
        <Text>Questline app met Typescript en Nativewind!</Text>
        {quests.map((quest) => (
          <View
            key={quest.id}
            className="border border-slate-400 border-dashed rounded-2xl"
          >
            <Quest quest={quest} />
          </View>
        ))}
        <View>
          <Button
            onPress={() => navigation.navigate(Screen.CreateQuest)}
            title="Add Trip"
          />
        </View>
      </View>
    </Layout>
  );
};
