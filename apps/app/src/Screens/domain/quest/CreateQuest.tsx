import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "@/components/generic/Button";
import { ScreenWrap } from "@/screens/ScreenWrap";
import { Quests as questsList } from "@/data/domain/list";
import { RootScreensParamList } from "@/types";
import { addQuest as addQuestToStore, getQuestStore } from "@/store/domain";
import { useAppDispatch, useAppSelector } from "@/store/infrastructure";
import {
  StorageKey,
  storeValueIntoStoredArray,
} from "@/infrastructure/storage";

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
    <ScreenWrap navigation={navigation} route={route}>
      <View className="space-y-8">
        <Text className="text-lg">Choose or type the quest:</Text>
        <View className="flex items-center space-y-4">
          {questsList.map((quest) => (
            <View key={quest.name}>
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
    </ScreenWrap>
  );
};
