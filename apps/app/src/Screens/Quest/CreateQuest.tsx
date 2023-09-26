import { Button } from "@/components/Button";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList } from "../Models/Screens";
import { Text, TextInput, View } from "react-native";
import { Layout } from "../Layout";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";
import {
  add as addQuestToStore,
  getQuestStore,
} from "@/store/Domain/quest-slice";
import { useState } from "react";
import { storeValueIntoStoredArray } from "@/infrastructure/storage/Application/Helper";
import { StorageKey } from "@/infrastructure/storage/localstorage/Keys";
import { Quests as questList } from "@/domain/Quest/Models/QuestsList";

type Props = NativeStackScreenProps<RootScreensParamList>;

export const CreateQuest = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { quests } = useAppSelector(getQuestStore);

  const [questName, setQuestName] = useState<string>("");

  const createQuest = async (name: string): Promise<void> => {
    const newQuest = {
      id: new Date().getTime().toString(),
      name,
      start: new Date().toString(),
    };

    const isStored = await storeValueIntoStoredArray(
      quests,
      newQuest,
      StorageKey.Quests
    );

    if (isStored) {
      dispatch(addQuestToStore(newQuest));
      navigation.goBack();
    }
  };

  return (
    <Layout navigation={navigation} route={route}>
      <View className="space-y-8">
        <Text className="text-lg">Choose or type the quest:</Text>
        <View className="flex items-center space-y-4">
          {questList.map((quest) => (
            <View>
              <Button
                onPress={() => setQuestName(quest.name)}
                title={quest.name}
              />
            </View>
          ))}
        </View>
        <View>
          <Text className="text-lg">Quest Name:</Text>
          <TextInput
            onChangeText={setQuestName}
            value={questName}
            className="bg-slate-100 p-4 border border-slate-400"
          />
        </View>
        <View>
          <Button onPress={() => createQuest(questName)} title="Start Quest" />
        </View>
      </View>
    </Layout>
  );
};
