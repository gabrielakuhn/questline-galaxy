import { Button, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";

import { Timer } from "@/components/generic/Timer";
import { Quest as QuestModel } from "@/types";

import {
  StorageKey,
  modifyValueIntoStoredArray,
  removeValueFromStoredArray,
  storeValueIntoStoredArray,
} from "@/infrastructure/storage";
import { useAppDispatch, useAppSelector } from "@/store/infrastructure";
import {
  getQuestStore,
  modifyQuest as modifyQuestFromState,
  removeQuest as removeQuestFromState,
} from "@/store/domain";
import { useEffect, useState } from "react";

interface Props {
  quest: QuestModel;
}

export const Quest = ({ quest }: Props) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const { quests } = useAppSelector(getQuestStore);

  const deleteQuest = async (id: string): Promise<void> => {
    const isRemoved = await removeValueFromStoredArray(
      quests,
      id,
      StorageKey.Quests
    );

    if (isRemoved) {
      dispatch(removeQuestFromState(id));
    }
  };

  const finishQuest = async (id: string): Promise<void> => {
    const modifiedQuest = {
      id,
      end: new Date().toString(),
    };

    const isStored = await modifyValueIntoStoredArray(
      quests,
      modifiedQuest,
      StorageKey.Quests
    );

    if (isStored) {
      dispatch(modifyQuestFromState(modifiedQuest));
    }

    setChecked(!checked);
  };

  useEffect(() => {
    console.log("NEW STATE", quests);
  }, [quests]);

  return (
    <View className="flex flex-row p-6 items-center">
      <Text className="font-bold pr-3">{quest.name}</Text>
      <Timer start={new Date(quest.start)} />
      <CheckBox
        checked={checked}
        onPress={() => finishQuest(quest.id)}
        size={24}
      />
      <View className="mb-1">
        <Button onPress={() => deleteQuest(quest.id)} title="x"></Button>
      </View>
    </View>
  );
};
