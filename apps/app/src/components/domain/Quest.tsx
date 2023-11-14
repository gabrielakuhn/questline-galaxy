import { Button, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";

import { Timer } from "@/components/generic/Timer";
import { Quest as QuestType } from "@/types";

import {
  StorageKey,
  modifyValueIntoStoredArray,
  removeValueFromStoredArray,
} from "@/infrastructure/storage";
import { useAppDispatch, useAppSelector } from "@/store/infrastructure";
import {
  getQuestStore,
  modifyQuest as modifyQuestFromState,
  removeQuest as removeQuestFromState,
} from "@/store/domain";
import { QuestInstance } from "@/constructors/domain/Quest";

interface Props {
  quest: QuestType;
}

export const Quest = ({ quest }: Props) => {
  const thisQuest = new QuestInstance(quest);
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
    const indexToModify = quests.findIndex((quest) => quest.id == id);
    const modifiedQuest = {
      ...quests[indexToModify],
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
  };

  return (
    <View className="flex flex-row p-6 items-center">
      <Text className="font-bold pr-3">{quest.name}</Text>
      <Timer
        start={quest.start}
        end={thisQuest.isFinished() ? quest.end : undefined}
      />
      <CheckBox
        checked={thisQuest.isFinished()}
        disabled={thisQuest.isFinished()}
        onPress={() => finishQuest(quest.id)}
        size={24}
      />
      <View className="mb-1">
        <Button onPress={() => deleteQuest(quest.id)} title="x"></Button>
      </View>
    </View>
  );
};
